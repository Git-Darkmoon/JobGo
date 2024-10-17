function Container({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className="max-w-6xl mx-auto px-4 lg:px-2 py-6">{children}</div>
}
export default Container
