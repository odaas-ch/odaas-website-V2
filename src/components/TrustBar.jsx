function TrustBar() {
  return (
    <div className="bg-white border-b border-slate-200 py-6 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-sm text-slate-500 font-medium">
            Entwickelt für Schweizer KMUs
          </span>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-lg text-sm font-medium text-slate-700 border border-slate-200">
              <svg className="w-4 h-4 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Daten in der Schweiz
            </div>

            <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-lg text-sm font-medium text-slate-700 border border-slate-200">
              <svg className="w-4 h-4 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              nDSG-konform
            </div>

            <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-lg text-sm font-medium text-slate-700 border border-slate-200">
              <svg className="w-4 h-4 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Swiss Made
            </div>

            <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-lg text-sm font-medium text-slate-700 border border-slate-200">
              <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              Getestet mit KMUs
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrustBar
