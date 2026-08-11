function Metric({ label, value, change }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
      <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-slate-400">{label}</p>
      <div className="mt-2 flex items-end justify-between gap-2">
        <p className="text-base font-semibold text-navy-950">{value}</p>
        {change ? <span className="text-[10px] font-semibold text-brand-600">{change}</span> : null}
      </div>
    </div>
  )
}

function BarChart({ values = [42, 68, 54, 80, 62, 91, 73] }) {
  return (
    <div className="flex h-20 items-end gap-1.5" aria-hidden="true">
      {values.map((value, index) => (
        <div key={index} className="flex-1 rounded-t bg-brand-100" style={{ height: `${value}%` }}>
          <div className="h-full w-full rounded-t bg-brand-500/70" style={{ opacity: 0.42 + index * 0.07 }} />
        </div>
      ))}
    </div>
  )
}

function LineChart() {
  return (
    <svg viewBox="0 0 240 84" className="h-20 w-full" aria-hidden="true">
      <path d="M5 70H235M5 45H235M5 20H235" stroke="#e2e8f0" strokeWidth="1" />
      <path
        d="M6 64 C28 58, 34 39, 55 45 S84 58, 104 36 S135 19, 151 31 S182 47, 199 25 S221 22, 234 13"
        fill="none"
        stroke="#3478c5"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M6 72 C28 67, 44 63, 63 64 S91 55, 107 57 S137 47, 155 50 S187 39, 205 43 S225 33, 234 35"
        fill="none"
        stroke="#0b1f3a"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="4 5"
        opacity="0.55"
      />
    </svg>
  )
}

function KimiaPreview({ compact = false }) {
  return (
    <div className="h-full rounded-2xl border border-slate-200 bg-slate-50 p-3 sm:p-4">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-600">Performance Analytics</p>
          <p className="mt-0.5 text-xs font-semibold text-navy-950">Kimia Farma · 2020–2023</p>
        </div>
        <div className="rounded-md bg-white px-2 py-1 text-[9px] font-medium text-slate-500 shadow-sm">All Regions</div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <Metric label="Net Sales" value="KPI" change="YoY" />
        <Metric label="Net Profit" value="KPI" change="Margin" />
        <Metric label="Transactions" value="KPI" change="Trend" />
      </div>
      <div className={`mt-2 grid gap-2 ${compact ? 'grid-cols-1' : 'grid-cols-5'}`}>
        <div className={`${compact ? '' : 'col-span-3'} rounded-xl border border-slate-200 bg-white p-3 shadow-sm`}>
          <div className="flex items-center justify-between">
            <p className="text-[10px] font-semibold text-slate-600">Sales & Profit Trend</p>
            <span className="text-[9px] text-slate-400">2020 — 2023</span>
          </div>
          <LineChart />
        </div>
        {!compact ? (
          <div className="col-span-2 rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
            <p className="text-[10px] font-semibold text-slate-600">Regional Contribution</p>
            <BarChart values={[55, 78, 63, 90, 71]} />
          </div>
        ) : null}
      </div>
    </div>
  )
}

function SalesPreview() {
  return (
    <div className="h-full rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-600">Sales Analysis</p>
          <p className="text-xs font-semibold text-navy-950">Kitchen Equipment</p>
        </div>
        <span className="text-[9px] text-slate-400">10,000 transactions</span>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-brand-50 p-3">
          <p className="text-[10px] text-slate-500">Product Mix</p>
          <div className="mt-3 flex items-end gap-1.5">
            {[42, 77, 58, 88, 66].map((v, i) => (
              <div key={i} className="flex-1 rounded-t bg-brand-500/60" style={{ height: `${v * 0.65}px` }} />
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 p-3">
          <p className="text-[10px] text-slate-500">Monthly Trend</p>
          <LineChart />
        </div>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {['Clean', 'Analyze', 'Visualize'].map((item, index) => (
          <div key={item} className="rounded-lg border border-slate-200 px-2 py-2 text-center">
            <div className="mx-auto mb-1 h-1.5 w-8 rounded-full bg-brand-500" style={{ opacity: 0.45 + index * 0.2 }} />
            <span className="text-[9px] font-semibold text-slate-500">{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function ExcelPreview() {
  return (
    <div className="h-full overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <div className="flex h-8 items-center gap-2 bg-navy-900 px-3 text-[9px] font-medium text-white/80">
        <span className="rounded bg-white/10 px-2 py-1">Dashboard</span>
        <span>Analysis</span>
        <span>Raw Data</span>
      </div>
      <div className="grid grid-cols-4 gap-px bg-slate-200 p-px">
        {[...Array(24)].map((_, i) => (
          <div key={i} className={`h-5 bg-white ${i < 4 ? 'font-semibold' : ''}`} />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3 p-4">
        <div className="rounded-xl bg-brand-50 p-3">
          <p className="text-[10px] font-semibold text-slate-600">Pivot Summary</p>
          <BarChart values={[58, 74, 49, 86, 69]} />
        </div>
        <div className="rounded-xl border border-slate-200 p-3">
          <p className="text-[10px] font-semibold text-slate-600">KPI Trend</p>
          <LineChart />
        </div>
      </div>
    </div>
  )
}

function ChatbotPreview() {
  return (
    <div className="h-full rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <div className="mx-auto max-w-sm overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-100 px-4 py-3">
          <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-600">BAKUL Kahuripan</p>
          <p className="text-xs font-semibold text-navy-950">KBLI Information Assistant</p>
        </div>
        <div className="space-y-3 p-4">
          <div className="ml-auto max-w-[78%] rounded-xl rounded-br-sm bg-navy-900 px-3 py-2 text-[10px] leading-4 text-white">
            Saya ingin mencari klasifikasi usaha yang sesuai.
          </div>
          <div className="max-w-[82%] rounded-xl rounded-bl-sm bg-brand-50 px-3 py-2 text-[10px] leading-4 text-slate-600">
            Saya dapat membantu mencari informasi KBLI berdasarkan kata kunci usaha dan basis pengetahuan yang tersedia.
          </div>
          <div className="flex gap-2">
            <div className="h-8 flex-1 rounded-lg border border-slate-200 bg-slate-50" />
            <div className="grid h-8 w-10 place-items-center rounded-lg bg-brand-500 text-[9px] font-semibold text-white">Send</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function DashboardPreview({ type, compact = false }) {
  if (type === 'kimia') return <KimiaPreview compact={compact} />
  if (type === 'sales') return <SalesPreview />
  if (type === 'excel') return <ExcelPreview />
  return <ChatbotPreview />
}

export function HeroAnalyticsVisual() {
  return (
    <div className="relative mx-auto max-w-xl lg:ml-auto">
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-brand-50/70 blur-2xl" aria-hidden="true" />
      <div className="rounded-[1.6rem] border border-slate-200 bg-white p-3 shadow-card sm:p-4">
        <KimiaPreview />
      </div>
      <div className="absolute -bottom-5 -left-3 hidden w-40 rounded-xl border border-slate-200 bg-white p-3 shadow-soft sm:block">
        <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-slate-400">Workflow</p>
        <p className="mt-1 text-xs font-semibold text-navy-950">Data → Insight → Decision</p>
      </div>
    </div>
  )
}
