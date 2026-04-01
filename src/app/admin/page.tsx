"use client";

import { useState, useEffect, useCallback } from "react";

interface ICP {
  id: string;
  name: string;
  segment: string;
  industries: string[];
  job_titles: string[];
  locations: string[];
  employee_range: string;
  budget_range: string;
  pain_points: string[];
  notes: string;
  created_at: string;
}

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  title: string;
  industry: string;
  location: string;
  website: string;
  linkedin_url: string;
  source: string;
  status: string;
  icp_id: string;
  notes: string;
  created_at: string;
  icps?: { name: string };
}

interface Booking {
  id: string;
  name: string;
  email: string;
  phone?: string;
  service?: string;
  date?: string;
  time?: string;
  status: string;
  notes?: string;
  created_at: string;
}

interface SiteStats {
  contacts: { count: number; recent: Array<{ name: string; email: string; service?: string; created_at: string }> };
  audits: { count: number; recent: Array<{ name: string; email: string; url?: string; created_at: string }> };
  subscribers: { count: number; recent: Array<{ email: string; created_at: string }> };
  bookings: { count: number; recent: Array<{ name?: string; email?: string; created_at: string }> };
}

interface ContentEntry {
  id?: string;
  page: string;
  section_key: string;
  content_type: string;
  value: string;
  label?: string;
}

const STAGES = [
  { key: "new", label: "New", color: "#a78bfa" },
  { key: "contacted", label: "Contacted", color: "#feb300" },
  { key: "replied", label: "Replied", color: "#ff5e6c" },
  { key: "meeting", label: "Meeting", color: "#60a5fa" },
  { key: "client", label: "Client", color: "#4cbfa6" },
  { key: "not_interested", label: "Not Interested", color: "#ef4444" },
];

const BOOKING_STATUSES = [
  { key: "pending", label: "Pending", color: "#feb300" },
  { key: "confirmed", label: "Confirmed", color: "#60a5fa" },
  { key: "completed", label: "Completed", color: "#4cbfa6" },
  { key: "cancelled", label: "Cancelled", color: "#ef4444" },
  { key: "no_show", label: "No Show", color: "#6b7280" },
];

type PageType = "dashboard" | "icps" | "leads" | "bookings" | "content" | "inquiries";

export default function AdminDashboard() {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState(false);
  const [page, setPage] = useState<PageType>("dashboard");
  const [icps, setIcps] = useState<ICP[]>([]);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [siteStats, setSiteStats] = useState<SiteStats | null>(null);
  const [contentEntries, setContentEntries] = useState<ContentEntry[]>([]);
  const [showIcpForm, setShowIcpForm] = useState(false);
  const [searchingIcpId, setSearchingIcpId] = useState("");
  const [filterIcp, setFilterIcp] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterBookingStatus, setFilterBookingStatus] = useState("all");
  const [showContentForm, setShowContentForm] = useState(false);
  const [contentForm, setContentForm] = useState<ContentEntry>({
    page: "home", section_key: "", content_type: "text", value: "", label: "",
  });
  const [inquiryTab, setInquiryTab] = useState<"contacts" | "audits">("contacts");

  const [icpForm, setIcpForm] = useState({
    name: "", segment: "primary", industries: "", job_titles: "",
    locations: "United States", employee_range: "1,50", budget_range: "",
    pain_points: "", notes: "",
  });

  const fetchData = useCallback(async () => {
    const [i, l, b, s, c] = await Promise.all([
      fetch("/api/admin/icps").then((r) => r.json()),
      fetch("/api/admin/leads").then((r) => r.json()),
      fetch("/api/admin/bookings").then((r) => r.json()),
      fetch("/api/admin/stats").then((r) => r.json()),
      fetch("/api/admin/content").then((r) => r.json()),
    ]);
    setIcps(Array.isArray(i) ? i : []);
    setLeads(Array.isArray(l) ? l : []);
    setBookings(Array.isArray(b) ? b : []);
    setSiteStats(s?.contacts ? s : null);
    setContentEntries(Array.isArray(c) ? c : []);
  }, []);

  useEffect(() => { if (authed) fetchData(); }, [authed, fetchData]);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/admin/auth", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (res.ok) { setAuthed(true); setAuthError(false); }
    else setAuthError(true);
  }

  async function createIcp(e: React.FormEvent) {
    e.preventDefault();
    await fetch("/api/admin/icps", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: icpForm.name, segment: icpForm.segment,
        industries: icpForm.industries.split(",").map((s) => s.trim()).filter(Boolean),
        job_titles: icpForm.job_titles.split(",").map((s) => s.trim()).filter(Boolean),
        locations: icpForm.locations.split(",").map((s) => s.trim()).filter(Boolean),
        employee_range: icpForm.employee_range, budget_range: icpForm.budget_range,
        pain_points: icpForm.pain_points.split("\n").filter(Boolean), notes: icpForm.notes,
      }),
    });
    setIcpForm({ name: "", segment: "primary", industries: "", job_titles: "", locations: "United States", employee_range: "1,50", budget_range: "", pain_points: "", notes: "" });
    setShowIcpForm(false);
    fetchData();
  }

  async function deleteIcp(id: string) {
    await fetch("/api/admin/icps", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id }) });
    fetchData();
  }

  async function findLeads(icp: ICP) {
    setSearchingIcpId(icp.id);
    try {
      const res = await fetch("/api/apollo/search", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          industries: icp.industries, job_titles: icp.job_titles,
          locations: icp.locations, employee_range: icp.employee_range,
        }),
      });
      const data = await res.json();
      if (data.leads?.length) {
        const newLeads = data.leads.map((l: Record<string, string>) => ({ ...l, icp_id: icp.id, status: "new" }));
        await fetch("/api/admin/leads", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(newLeads) });
        fetchData();
      }
    } catch (err) { console.error("Find leads failed:", err); }
    setSearchingIcpId("");
  }

  async function updateStatus(id: string, status: string) {
    await fetch("/api/admin/leads", { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id, status }) });
    fetchData();
  }

  async function updateBookingStatus(id: string, status: string) {
    await fetch("/api/admin/bookings", { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id, status }) });
    fetchData();
  }

  async function saveContent(e: React.FormEvent) {
    e.preventDefault();
    await fetch("/api/admin/content", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contentForm),
    });
    setContentForm({ page: "home", section_key: "", content_type: "text", value: "", label: "" });
    setShowContentForm(false);
    fetchData();
  }

  async function deleteContent(id: string) {
    await fetch("/api/admin/content", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id }) });
    fetchData();
  }

  const stageCounts = STAGES.reduce((acc, s) => {
    acc[s.key] = leads.filter((l) => l.status === s.key).length;
    return acc;
  }, {} as Record<string, number>);

  const bookingStatusCounts = BOOKING_STATUSES.reduce((acc, s) => {
    acc[s.key] = bookings.filter((b) => b.status === s.key).length;
    return acc;
  }, {} as Record<string, number>);

  const filteredLeads = leads.filter((l) => {
    if (filterIcp !== "all" && l.icp_id !== filterIcp) return false;
    if (filterStatus !== "all" && l.status !== filterStatus) return false;
    return true;
  });

  const filteredBookings = bookings.filter((b) => {
    if (filterBookingStatus !== "all" && b.status !== filterBookingStatus) return false;
    return true;
  });

  // LOGIN
  if (!authed) {
    return (
      <div className="min-h-screen bg-[#0a0820] flex items-center justify-center">
        <form onSubmit={handleLogin} className="bg-[#12102e] border border-white/10 rounded-2xl p-8 w-full max-w-sm">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-white">Media<span className="text-[#ff5e6c]">Nest</span></h1>
            <p className="text-gray-500 text-sm mt-1">Admin Dashboard</p>
          </div>
          {authError && <p className="text-red-400 text-sm text-center mb-4">Wrong password</p>}
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter admin password" className="w-full bg-[#0a0820] border border-white/20 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#ff5e6c] mb-4" autoFocus />
          <button className="w-full bg-[#ff5e6c] text-white py-3 rounded-lg font-semibold hover:bg-[#e84d5b] transition-colors">Login</button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0820] flex">
      {/* Sidebar */}
      <aside className="w-56 bg-[#12102e] border-r border-white/10 p-4 flex flex-col shrink-0 min-h-screen">
        <div className="mb-8">
          <h1 className="text-lg font-bold text-white">Media<span className="text-[#ff5e6c]">Nest</span></h1>
          <p className="text-gray-600 text-xs mt-0.5">Admin Panel</p>
        </div>
        <nav className="space-y-1 flex-1">
          {([
            { id: "dashboard" as const, icon: "📊", label: "Dashboard" },
            { id: "bookings" as const, icon: "📅", label: "Bookings" },
            { id: "inquiries" as const, icon: "📩", label: "Inquiries" },
            { id: "leads" as const, icon: "👥", label: "Leads" },
            { id: "icps" as const, icon: "🎯", label: "ICPs" },
            { id: "content" as const, icon: "📝", label: "Content" },
          ]).map((item) => (
            <button key={item.id} onClick={() => setPage(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${page === item.id ? "bg-[#ff5e6c]/20 text-[#ff5e6c]" : "text-gray-400 hover:text-white hover:bg-white/5"}`}>
              <span>{item.icon}</span>{item.label}
              {item.id === "bookings" && bookings.filter(b => b.status === "pending").length > 0 && (
                <span className="ml-auto bg-[#ff5e6c] text-white text-xs px-1.5 py-0.5 rounded-full">{bookings.filter(b => b.status === "pending").length}</span>
              )}
              {item.id === "inquiries" && siteStats && (siteStats.contacts.count + siteStats.audits.count) > 0 && (
                <span className="ml-auto bg-[#a78bfa] text-white text-xs px-1.5 py-0.5 rounded-full">{siteStats.contacts.count + siteStats.audits.count}</span>
              )}
            </button>
          ))}
        </nav>
        <a href="/" className="text-gray-500 hover:text-white text-xs mt-4 flex items-center gap-2">← Back to Site</a>
      </aside>

      {/* Main */}
      <main className="flex-1 p-8 overflow-auto">

        {/* ===== DASHBOARD ===== */}
        {page === "dashboard" && (
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">Dashboard</h2>
            <p className="text-gray-500 text-sm mb-8">Overview of your business activity.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[
                { icon: "📅", val: bookings.length, label: "Total Bookings", c: "#60a5fa", sub: `${bookingStatusCounts.pending || 0} pending` },
                { icon: "📩", val: (siteStats?.contacts.count || 0) + (siteStats?.audits.count || 0), label: "Inquiries", c: "#a78bfa", sub: `${siteStats?.contacts.count || 0} contact, ${siteStats?.audits.count || 0} audits` },
                { icon: "👥", val: leads.length, label: "Total Leads", c: "#4cbfa6", sub: `${stageCounts.client || 0} clients won` },
                { icon: "📈", val: siteStats?.subscribers.count || 0, label: "Subscribers", c: "#feb300", sub: "newsletter" },
              ].map((card) => (
                <div key={card.label} className="bg-[#12102e] border border-white/10 rounded-xl p-5 hover:border-white/20 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-xl">{card.icon}</span>
                    <p className="text-3xl font-bold" style={{ color: card.c }}>{card.val}</p>
                  </div>
                  <p className="text-white text-sm mt-2 font-medium">{card.label}</p>
                  <p className="text-gray-600 text-xs mt-0.5">{card.sub}</p>
                </div>
              ))}
            </div>

            {/* Booking & Lead Pipeline */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
              <div className="bg-[#12102e] border border-white/10 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-4">Booking Status</h3>
                <div className="flex flex-wrap gap-3">
                  {BOOKING_STATUSES.map((s) => (
                    <span key={s.key} className="px-4 py-1.5 rounded-full text-sm font-medium" style={{ color: s.color, backgroundColor: `${s.color}20` }}>
                      {s.label}: {bookingStatusCounts[s.key] || 0}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-[#12102e] border border-white/10 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-4">Lead Pipeline</h3>
                <div className="flex flex-wrap gap-3">
                  {STAGES.map((s) => (
                    <span key={s.key} className="px-4 py-1.5 rounded-full text-sm font-medium" style={{ color: s.color, backgroundColor: `${s.color}20` }}>
                      {s.label}: {stageCounts[s.key] || 0}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <button onClick={() => setPage("bookings")} className="bg-[#12102e] border border-white/10 rounded-xl p-5 text-left hover:border-[#60a5fa]/50 transition-colors">
                <span className="text-2xl">📅</span>
                <h3 className="text-[#60a5fa] font-semibold mt-2">Manage Bookings</h3>
                <p className="text-gray-500 text-xs mt-1">View and update booking statuses.</p>
              </button>
              <button onClick={() => setPage("inquiries")} className="bg-[#12102e] border border-white/10 rounded-xl p-5 text-left hover:border-[#a78bfa]/50 transition-colors">
                <span className="text-2xl">📩</span>
                <h3 className="text-[#a78bfa] font-semibold mt-2">View Inquiries</h3>
                <p className="text-gray-500 text-xs mt-1">Contact forms and audit requests.</p>
              </button>
              <button onClick={() => setPage("content")} className="bg-[#12102e] border border-white/10 rounded-xl p-5 text-left hover:border-[#feb300]/50 transition-colors">
                <span className="text-2xl">📝</span>
                <h3 className="text-[#feb300] font-semibold mt-2">Edit Content</h3>
                <p className="text-gray-500 text-xs mt-1">Manage site text, images, and pages.</p>
              </button>
            </div>

            {/* Recent Bookings */}
            <div className="bg-[#12102e] border border-white/10 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold">Recent Bookings</h3>
                <button onClick={() => setPage("bookings")} className="text-[#60a5fa] text-xs hover:underline">View all →</button>
              </div>
              {bookings.length > 0 ? (
                <div className="space-y-3">
                  {bookings.slice(0, 5).map((b) => (
                    <div key={b.id} className="flex items-center justify-between text-sm border-b border-white/5 pb-3">
                      <div>
                        <p className="text-white font-medium">{b.name || "—"}</p>
                        <p className="text-gray-500 text-xs">{b.email} {b.service ? `· ${b.service}` : ""}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        {b.date && <span className="text-gray-500 text-xs">{b.date} {b.time || ""}</span>}
                        <span className="px-3 py-1 rounded-full text-xs font-medium" style={{ color: BOOKING_STATUSES.find((s) => s.key === b.status)?.color, backgroundColor: `${BOOKING_STATUSES.find((s) => s.key === b.status)?.color}20` }}>
                          {BOOKING_STATUSES.find((s) => s.key === b.status)?.label || b.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-600 text-sm text-center py-6">No bookings yet.</p>
              )}
            </div>
          </div>
        )}

        {/* ===== BOOKINGS ===== */}
        {page === "bookings" && (
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">Bookings</h2>
            <p className="text-gray-500 text-sm mb-6">Manage consultation bookings and their status.</p>

            {/* Filters */}
            <div className="flex items-center gap-4 mb-6">
              <select value={filterBookingStatus} onChange={(e) => setFilterBookingStatus(e.target.value)}
                className="bg-[#12102e] border border-white/10 rounded-lg px-3 py-2 text-white text-sm min-w-[150px]">
                <option value="all">All Status</option>
                {BOOKING_STATUSES.map((s) => (
                  <option key={s.key} value={s.key}>{s.label}</option>
                ))}
              </select>
              <span className="text-gray-500 text-sm ml-auto">{filteredBookings.length} bookings</span>
            </div>

            {/* Status summary */}
            <div className="flex flex-wrap gap-3 mb-6">
              {BOOKING_STATUSES.map((s) => (
                <button key={s.key} onClick={() => setFilterBookingStatus(filterBookingStatus === s.key ? "all" : s.key)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${filterBookingStatus === s.key ? "ring-2" : ""}`}
                  style={{ color: s.color, backgroundColor: `${s.color}15`, borderColor: s.color }}>
                  {s.label} ({bookingStatusCounts[s.key] || 0})
                </button>
              ))}
            </div>

            <div className="bg-[#12102e] border border-white/10 rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left text-gray-500 px-4 py-3 font-medium text-xs uppercase tracking-wider">Client</th>
                      <th className="text-left text-gray-500 px-4 py-3 font-medium text-xs uppercase tracking-wider">Service</th>
                      <th className="text-left text-gray-500 px-4 py-3 font-medium text-xs uppercase tracking-wider">Date/Time</th>
                      <th className="text-left text-gray-500 px-4 py-3 font-medium text-xs uppercase tracking-wider">Status</th>
                      <th className="text-left text-gray-500 px-4 py-3 font-medium text-xs uppercase tracking-wider">Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredBookings.length > 0 ? filteredBookings.map((booking) => (
                      <tr key={booking.id} className="border-b border-white/5 hover:bg-white/5">
                        <td className="px-4 py-3">
                          <p className="text-white font-medium">{booking.name || "—"}</p>
                          <p className="text-gray-500 text-xs">{booking.email}</p>
                        </td>
                        <td className="px-4 py-3 text-gray-300 text-xs">{booking.service || "Consultation"}</td>
                        <td className="px-4 py-3">
                          <p className="text-gray-300 text-xs">{booking.date || "TBD"}</p>
                          {booking.time && <p className="text-gray-500 text-xs">{booking.time}</p>}
                        </td>
                        <td className="px-4 py-3">
                          <select value={booking.status} onChange={(e) => updateBookingStatus(booking.id, e.target.value)}
                            className="rounded-full px-3 py-1 text-xs font-medium border-0 focus:outline-none cursor-pointer"
                            style={{ color: BOOKING_STATUSES.find((s) => s.key === booking.status)?.color || "#6b7280", backgroundColor: `${BOOKING_STATUSES.find((s) => s.key === booking.status)?.color || "#6b7280"}20` }}>
                            {BOOKING_STATUSES.map((s) => (
                              <option key={s.key} value={s.key}>{s.label}</option>
                            ))}
                          </select>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex gap-3">
                            {booking.phone && <a href={`tel:${booking.phone}`} className="text-gray-500 hover:text-white text-xs" title={booking.phone}>📞</a>}
                            {booking.email && <a href={`mailto:${booking.email}`} className="text-gray-500 hover:text-white text-xs" title={booking.email}>✉️</a>}
                          </div>
                        </td>
                      </tr>
                    )) : (
                      <tr>
                        <td colSpan={5} className="px-4 py-12 text-center text-gray-600">
                          No bookings yet. Bookings will appear here when clients book calls through Cal.com.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ===== INQUIRIES ===== */}
        {page === "inquiries" && (
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">Inquiries</h2>
            <p className="text-gray-500 text-sm mb-6">Contact form submissions and free audit requests.</p>

            <div className="flex gap-2 mb-6">
              <button onClick={() => setInquiryTab("contacts")}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors ${inquiryTab === "contacts" ? "bg-[#a78bfa]/20 text-[#a78bfa]" : "text-gray-400 hover:text-white hover:bg-white/5"}`}>
                📩 Contact Forms ({siteStats?.contacts.count || 0})
              </button>
              <button onClick={() => setInquiryTab("audits")}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors ${inquiryTab === "audits" ? "bg-[#ff5e6c]/20 text-[#ff5e6c]" : "text-gray-400 hover:text-white hover:bg-white/5"}`}>
                🔍 Audit Requests ({siteStats?.audits.count || 0})
              </button>
            </div>

            <div className="bg-[#12102e] border border-white/10 rounded-xl overflow-hidden">
              {inquiryTab === "contacts" ? (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left text-gray-500 px-4 py-3 font-medium text-xs uppercase tracking-wider">Name</th>
                        <th className="text-left text-gray-500 px-4 py-3 font-medium text-xs uppercase tracking-wider">Email</th>
                        <th className="text-left text-gray-500 px-4 py-3 font-medium text-xs uppercase tracking-wider">Service</th>
                        <th className="text-left text-gray-500 px-4 py-3 font-medium text-xs uppercase tracking-wider">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {siteStats?.contacts.recent && siteStats.contacts.recent.length > 0 ? siteStats.contacts.recent.map((c, i) => (
                        <tr key={i} className="border-b border-white/5 hover:bg-white/5">
                          <td className="px-4 py-3 text-white font-medium">{c.name}</td>
                          <td className="px-4 py-3">
                            <a href={`mailto:${c.email}`} className="text-[#60a5fa] hover:underline text-xs">{c.email}</a>
                          </td>
                          <td className="px-4 py-3 text-gray-400 text-xs">{c.service || "—"}</td>
                          <td className="px-4 py-3 text-gray-500 text-xs">{new Date(c.created_at).toLocaleDateString()}</td>
                        </tr>
                      )) : (
                        <tr><td colSpan={4} className="px-4 py-12 text-center text-gray-600">No contact submissions yet.</td></tr>
                      )}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left text-gray-500 px-4 py-3 font-medium text-xs uppercase tracking-wider">Name</th>
                        <th className="text-left text-gray-500 px-4 py-3 font-medium text-xs uppercase tracking-wider">Email</th>
                        <th className="text-left text-gray-500 px-4 py-3 font-medium text-xs uppercase tracking-wider">URL</th>
                        <th className="text-left text-gray-500 px-4 py-3 font-medium text-xs uppercase tracking-wider">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {siteStats?.audits.recent && siteStats.audits.recent.length > 0 ? siteStats.audits.recent.map((a, i) => (
                        <tr key={i} className="border-b border-white/5 hover:bg-white/5">
                          <td className="px-4 py-3 text-white font-medium">{a.name}</td>
                          <td className="px-4 py-3">
                            <a href={`mailto:${a.email}`} className="text-[#60a5fa] hover:underline text-xs">{a.email}</a>
                          </td>
                          <td className="px-4 py-3">
                            {a.url ? <a href={a.url} target="_blank" rel="noopener noreferrer" className="text-[#60a5fa] hover:underline text-xs truncate max-w-[200px] block">{a.url}</a> : <span className="text-gray-600 text-xs">—</span>}
                          </td>
                          <td className="px-4 py-3 text-gray-500 text-xs">{new Date(a.created_at).toLocaleDateString()}</td>
                        </tr>
                      )) : (
                        <tr><td colSpan={4} className="px-4 py-12 text-center text-gray-600">No audit requests yet.</td></tr>
                      )}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ===== CONTENT (CMS) ===== */}
        {page === "content" && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-white">Content Manager</h2>
                <p className="text-gray-500 text-sm">Edit site text, add images/video URLs, and manage page content.</p>
              </div>
              <button onClick={() => setShowContentForm(!showContentForm)} className="bg-[#ff5e6c] text-white px-5 py-2 rounded-lg font-semibold text-sm hover:bg-[#e84d5b]">
                {showContentForm ? "Cancel" : "+ Add Content"}
              </button>
            </div>

            {showContentForm && (
              <form onSubmit={saveContent} className="bg-[#12102e] border border-white/10 rounded-xl p-6 mb-8">
                <h3 className="text-white font-semibold mb-4">Add / Edit Content</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className="text-gray-400 text-xs block mb-1">Page</label>
                    <select value={contentForm.page} onChange={(e) => setContentForm({ ...contentForm, page: e.target.value })}
                      className="w-full bg-[#0a0820] border border-white/20 rounded-lg px-3 py-2 text-white text-sm">
                      <option value="home">Home</option>
                      <option value="about">About</option>
                      <option value="services">Services</option>
                      <option value="pricing">Pricing</option>
                      <option value="contact">Contact</option>
                      <option value="global">Global (Site-wide)</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-gray-400 text-xs block mb-1">Section Key *</label>
                    <input required value={contentForm.section_key} onChange={(e) => setContentForm({ ...contentForm, section_key: e.target.value })}
                      placeholder="e.g., hero_title, about_text" className="w-full bg-[#0a0820] border border-white/20 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#ff5e6c]" />
                  </div>
                  <div>
                    <label className="text-gray-400 text-xs block mb-1">Type</label>
                    <select value={contentForm.content_type} onChange={(e) => setContentForm({ ...contentForm, content_type: e.target.value })}
                      className="w-full bg-[#0a0820] border border-white/20 rounded-lg px-3 py-2 text-white text-sm">
                      <option value="text">Text</option>
                      <option value="textarea">Long Text</option>
                      <option value="image_url">Image URL</option>
                      <option value="video_url">Video URL</option>
                      <option value="link">Link</option>
                    </select>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="text-gray-400 text-xs block mb-1">Label (friendly name)</label>
                  <input value={contentForm.label || ""} onChange={(e) => setContentForm({ ...contentForm, label: e.target.value })}
                    placeholder="e.g., Hero Title, About Section Image" className="w-full bg-[#0a0820] border border-white/20 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#ff5e6c]" />
                </div>
                <div className="mb-4">
                  <label className="text-gray-400 text-xs block mb-1">Value *</label>
                  {contentForm.content_type === "textarea" ? (
                    <textarea required value={contentForm.value} onChange={(e) => setContentForm({ ...contentForm, value: e.target.value })}
                      rows={5} placeholder="Enter content..." className="w-full bg-[#0a0820] border border-white/20 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#ff5e6c]" />
                  ) : (
                    <input required value={contentForm.value} onChange={(e) => setContentForm({ ...contentForm, value: e.target.value })}
                      placeholder={contentForm.content_type.includes("url") ? "https://..." : "Enter value..."} className="w-full bg-[#0a0820] border border-white/20 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#ff5e6c]" />
                  )}
                </div>
                <button type="submit" className="bg-[#ff5e6c] text-white px-6 py-2 rounded-lg font-semibold text-sm hover:bg-[#e84d5b]">Save Content</button>
              </form>
            )}

            {/* Content list grouped by page */}
            {contentEntries.length > 0 ? (
              <div className="space-y-6">
                {Object.entries(
                  contentEntries.reduce((acc, entry) => {
                    if (!acc[entry.page]) acc[entry.page] = [];
                    acc[entry.page].push(entry);
                    return acc;
                  }, {} as Record<string, ContentEntry[]>)
                ).map(([pageName, entries]) => (
                  <div key={pageName} className="bg-[#12102e] border border-white/10 rounded-xl p-6">
                    <h3 className="text-white font-semibold mb-4 capitalize">{pageName} Page</h3>
                    <div className="space-y-3">
                      {entries.map((entry) => (
                        <div key={entry.id} className="flex items-start justify-between border-b border-white/5 pb-3">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <p className="text-white text-sm font-medium">{entry.label || entry.section_key}</p>
                              <span className="px-2 py-0.5 rounded text-xs bg-white/10 text-gray-400">{entry.content_type}</span>
                            </div>
                            {entry.content_type.includes("url") ? (
                              <a href={entry.value} target="_blank" rel="noopener noreferrer" className="text-[#60a5fa] text-xs hover:underline truncate block mt-1">{entry.value}</a>
                            ) : (
                              <p className="text-gray-400 text-xs mt-1 truncate">{entry.value}</p>
                            )}
                          </div>
                          <div className="flex gap-2 ml-4">
                            <button onClick={() => { setContentForm({ page: entry.page, section_key: entry.section_key, content_type: entry.content_type, value: entry.value, label: entry.label || "" }); setShowContentForm(true); }}
                              className="text-gray-500 hover:text-white text-xs px-2">Edit</button>
                            <button onClick={() => entry.id && deleteContent(entry.id)}
                              className="text-gray-600 hover:text-red-400 text-xs px-2">Delete</button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-[#12102e] border border-white/10 rounded-xl p-12 text-center">
                <p className="text-4xl mb-4">📝</p>
                <p className="text-white font-semibold mb-2">No content entries yet</p>
                <p className="text-gray-500 text-sm mb-4">Start adding editable content for your site — text, images, videos, and more.</p>
                <button onClick={() => setShowContentForm(true)} className="bg-[#ff5e6c] text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-[#e84d5b]">
                  + Add Your First Content
                </button>
              </div>
            )}

            {/* Help section */}
            <div className="bg-[#12102e] border border-white/10 rounded-xl p-6 mt-8">
              <h3 className="text-white font-semibold mb-3">How to Use the Content Manager</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-[#feb300] font-medium mb-1">Adding Text</p>
                  <p className="text-gray-500 text-xs">Use &quot;text&quot; for short values (titles, buttons) or &quot;textarea&quot; for longer paragraphs.</p>
                </div>
                <div>
                  <p className="text-[#60a5fa] font-medium mb-1">Adding Images</p>
                  <p className="text-gray-500 text-xs">Upload images to <a href="https://supabase.com" target="_blank" rel="noopener noreferrer" className="text-[#60a5fa] hover:underline">Supabase Storage</a> or use an external URL (Unsplash, Pexels, Cloudinary).</p>
                </div>
                <div>
                  <p className="text-[#ff5e6c] font-medium mb-1">Adding Videos</p>
                  <p className="text-gray-500 text-xs">Paste a YouTube embed URL or direct video URL. Use video_url type.</p>
                </div>
                <div>
                  <p className="text-[#4cbfa6] font-medium mb-1">Section Keys</p>
                  <p className="text-gray-500 text-xs">Use consistent keys like &quot;hero_title&quot;, &quot;about_image&quot;, &quot;services_video&quot; to identify content sections.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===== ICPs ===== */}
        {page === "icps" && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-white">ICPs</h2>
                <p className="text-gray-500 text-sm">Manage your Ideal Customer Profiles and search for matching leads.</p>
              </div>
              <button onClick={() => setShowIcpForm(!showIcpForm)} className="bg-[#ff5e6c] text-white px-5 py-2 rounded-lg font-semibold text-sm hover:bg-[#e84d5b]">
                {showIcpForm ? "Cancel" : "+ Create ICP"}
              </button>
            </div>

            {showIcpForm && (
              <form onSubmit={createIcp} className="bg-[#12102e] border border-white/10 rounded-xl p-6 mb-8">
                <h3 className="text-white font-semibold mb-4">New ICP</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="text-gray-400 text-xs block mb-1">Profile Name *</label>
                    <input required value={icpForm.name} onChange={(e) => setIcpForm({ ...icpForm, name: e.target.value })} placeholder="e.g., Local Restaurant Owners" className="w-full bg-[#0a0820] border border-white/20 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#ff5e6c]" />
                  </div>
                  <div>
                    <label className="text-gray-400 text-xs block mb-1">Segment</label>
                    <select value={icpForm.segment} onChange={(e) => setIcpForm({ ...icpForm, segment: e.target.value })} className="w-full bg-[#0a0820] border border-white/20 rounded-lg px-3 py-2 text-white text-sm">
                      <option value="primary">Primary</option><option value="secondary">Secondary</option><option value="tertiary">Tertiary</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-gray-400 text-xs block mb-1">Industries (comma separated)</label>
                    <input value={icpForm.industries} onChange={(e) => setIcpForm({ ...icpForm, industries: e.target.value })} placeholder="restaurant, plumbing, salon" className="w-full bg-[#0a0820] border border-white/20 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#ff5e6c]" />
                  </div>
                  <div>
                    <label className="text-gray-400 text-xs block mb-1">Job Titles (comma separated)</label>
                    <input value={icpForm.job_titles} onChange={(e) => setIcpForm({ ...icpForm, job_titles: e.target.value })} placeholder="owner, founder, ceo" className="w-full bg-[#0a0820] border border-white/20 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#ff5e6c]" />
                  </div>
                  <div>
                    <label className="text-gray-400 text-xs block mb-1">Locations (comma separated)</label>
                    <input value={icpForm.locations} onChange={(e) => setIcpForm({ ...icpForm, locations: e.target.value })} placeholder="Miami, New York" className="w-full bg-[#0a0820] border border-white/20 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#ff5e6c]" />
                  </div>
                  <div>
                    <label className="text-gray-400 text-xs block mb-1">Employee Range</label>
                    <select value={icpForm.employee_range} onChange={(e) => setIcpForm({ ...icpForm, employee_range: e.target.value })} className="w-full bg-[#0a0820] border border-white/20 rounded-lg px-3 py-2 text-white text-sm">
                      <option value="1,10">1-10</option><option value="1,50">1-50</option><option value="11,50">11-50</option><option value="51,200">51-200</option>
                    </select>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="text-gray-400 text-xs block mb-1">Pain Points (one per line)</label>
                  <textarea value={icpForm.pain_points} onChange={(e) => setIcpForm({ ...icpForm, pain_points: e.target.value })} rows={3} placeholder={"No website\nInvisible on Google\nNo social media"} className="w-full bg-[#0a0820] border border-white/20 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#ff5e6c]" />
                </div>
                <button type="submit" className="bg-[#ff5e6c] text-white px-6 py-2 rounded-lg font-semibold text-sm hover:bg-[#e84d5b]">Save ICP</button>
              </form>
            )}

            <div className="space-y-4">
              {icps.length > 0 ? icps.map((icp) => (
                <div key={icp.id} className="bg-[#12102e] border border-white/10 rounded-xl p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-white font-semibold text-lg">{icp.name}</h3>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${icp.segment === "primary" ? "bg-[#ff5e6c]/20 text-[#ff5e6c]" : icp.segment === "secondary" ? "bg-[#feb300]/20 text-[#feb300]" : "bg-[#a78bfa]/20 text-[#a78bfa]"}`}>{icp.segment}</span>
                      </div>
                      <p className="text-gray-500 text-sm mt-1">{leads.filter((l) => l.icp_id === icp.id).length} leads found</p>
                    </div>
                    <div className="flex gap-2">
                      <button onClick={() => findLeads(icp)} disabled={searchingIcpId === icp.id}
                        className="bg-[#a78bfa]/20 text-[#a78bfa] px-4 py-1.5 rounded-lg text-xs font-semibold hover:bg-[#a78bfa]/30 disabled:opacity-50">
                        {searchingIcpId === icp.id ? "Searching... (1-2 min)" : "🔍 Find Leads"}
                      </button>
                      <button onClick={() => deleteIcp(icp.id)} className="text-gray-600 hover:text-red-400 text-xs px-2">Delete</button>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                    <div><p className="text-gray-500 mb-1">Industries</p><p className="text-gray-300">{icp.industries?.join(", ") || "Any"}</p></div>
                    <div><p className="text-gray-500 mb-1">Job Titles</p><p className="text-gray-300">{icp.job_titles?.join(", ") || "Owner, Founder"}</p></div>
                    <div><p className="text-gray-500 mb-1">Locations</p><p className="text-gray-300">{icp.locations?.join(", ") || "US"}</p></div>
                    <div><p className="text-gray-500 mb-1">Employees</p><p className="text-gray-300">{icp.employee_range || "1-50"}</p></div>
                  </div>
                </div>
              )) : (
                <div className="bg-[#12102e] border border-white/10 rounded-xl p-12 text-center">
                  <p className="text-gray-500">No ICPs yet. Click &quot;+ Create ICP&quot; to get started.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ===== LEADS ===== */}
        {page === "leads" && (
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">Leads</h2>
            <p className="text-gray-500 text-sm mb-6">Manage and track your prospecting pipeline.</p>

            <div className="flex items-center gap-4 mb-6">
              <select value={filterIcp} onChange={(e) => setFilterIcp(e.target.value)}
                className="bg-[#12102e] border border-white/10 rounded-lg px-3 py-2 text-white text-sm min-w-[150px]">
                <option value="all">All ICPs</option>
                {icps.map((icp) => (
                  <option key={icp.id} value={icp.id}>{icp.name}</option>
                ))}
              </select>
              <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}
                className="bg-[#12102e] border border-white/10 rounded-lg px-3 py-2 text-white text-sm min-w-[130px]">
                <option value="all">All Status</option>
                {STAGES.map((s) => (
                  <option key={s.key} value={s.key}>{s.label}</option>
                ))}
              </select>
              <span className="text-gray-500 text-sm ml-auto">{filteredLeads.length} leads</span>
            </div>

            <div className="bg-[#12102e] border border-white/10 rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left text-gray-500 px-4 py-3 font-medium text-xs uppercase tracking-wider">Name</th>
                      <th className="text-left text-gray-500 px-4 py-3 font-medium text-xs uppercase tracking-wider">Title</th>
                      <th className="text-left text-gray-500 px-4 py-3 font-medium text-xs uppercase tracking-wider">Company</th>
                      <th className="text-left text-gray-500 px-4 py-3 font-medium text-xs uppercase tracking-wider">Status</th>
                      <th className="text-left text-gray-500 px-4 py-3 font-medium text-xs uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredLeads.length > 0 ? filteredLeads.map((lead) => (
                      <tr key={lead.id} className="border-b border-white/5 hover:bg-white/5">
                        <td className="px-4 py-3">
                          <p className="text-white font-medium">{lead.name}</p>
                          {lead.website && <p className="text-gray-500 text-xs truncate max-w-[200px]">{lead.website}</p>}
                        </td>
                        <td className="px-4 py-3 text-gray-400 text-xs">{lead.title || lead.industry || "—"}</td>
                        <td className="px-4 py-3 text-gray-300">{lead.company || "—"}</td>
                        <td className="px-4 py-3">
                          <select value={lead.status} onChange={(e) => updateStatus(lead.id, e.target.value)}
                            className="rounded-full px-3 py-1 text-xs font-medium border-0 focus:outline-none cursor-pointer"
                            style={{ color: STAGES.find((s) => s.key === lead.status)?.color, backgroundColor: `${STAGES.find((s) => s.key === lead.status)?.color}20` }}>
                            {STAGES.map((s) => (
                              <option key={s.key} value={s.key}>{s.label}</option>
                            ))}
                          </select>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex gap-3">
                            {lead.website && <a href={lead.website} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white" title="Website">🔗</a>}
                            {lead.phone && <a href={`tel:${lead.phone}`} className="text-gray-500 hover:text-white" title={lead.phone}>📞</a>}
                            {lead.email && <a href={`mailto:${lead.email}`} className="text-gray-500 hover:text-white" title={lead.email}>✉️</a>}
                          </div>
                        </td>
                      </tr>
                    )) : (
                      <tr>
                        <td colSpan={5} className="px-4 py-12 text-center text-gray-600">
                          No leads yet. Create an ICP and run a search to find prospects.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
