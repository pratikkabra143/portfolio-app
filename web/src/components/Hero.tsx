export default function Hero() {
  const name =
    process.env.NEXT_PUBLIC_SITE_NAME || 'Pratik Kabra'

  const tagline =
    process.env.NEXT_PUBLIC_SITE_TAGLINE ||
    'AI & Data Science Engineer'

  return (
    <section className="flex flex-col items-center justify-center text-center gap-6">
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
        {name}
      </h1>

      <p className="text-lg md:text-xl text-gray-400 max-w-2xl">
        {tagline}
      </p>
    </section>
  )
}
