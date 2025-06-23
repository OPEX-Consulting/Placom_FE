'use client'

interface WarehouseLayoutProps {
  children: React.ReactNode
}


export default function WarehouseLayout({ children }: WarehouseLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* <header className="bg-white shadow-sm border-b">
        <div className="px-4 py-3">
          <h1 className="text-xl font-semibold">Warehouse Management</h1>
        </div>
      </header>
       */}
      <main className="p-1">
        {children}
      </main>
      
      {/* <footer className="bg-white border-t mt-auto">
        <div className="px-4 py-3 text-center text-sm text-gray-600">
          © 2025 Warehouse System
        </div>
      </footer> */}
    </div>
  )
}