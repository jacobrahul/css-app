export default function Pricing() {
  return (
    <div className="py-16">
      <h2 className="text-2xl font-semibold">Pricing</h2>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="rounded-2xl p-6 border border-white/10">
          <h3 className="text-xl font-medium">Free</h3>
          <ul className="mt-4 space-y-2 opacity-80 text-sm">
            <li>1 project</li><li>2 snapshots / month</li><li>Non‑AI utilities</li>
          </ul>
        </div>
        <div className="rounded-2xl p-6 border border-white/10 bg-white/5">
          <h3 className="text-xl font-medium">Pro</h3>
          <ul className="mt-4 space-y-2 opacity-80 text-sm">
            <li>Unlimited projects</li><li>12 snapshots / month</li><li>AI add‑ons via BYOK</li>
          </ul>
          <form action="/api/stripe/checkout" method="post">
            <input type="hidden" name="price" value={process.env.STRIPE_PRICE_MONTHLY || ''} />
            <button className="mt-6 px-5 py-3 rounded-xl bg-white text-black" type="submit">Start Free Trial</button>
          </form>
        </div>
      </div>
    </div>
  );
}
