export default function Settings() {
  return (
    <div className="py-16">
      <h2 className="text-2xl font-semibold">Settings</h2>
      <p className="opacity-80 mt-2">Billing portal & BYOK will appear here.</p>
      <form action="/api/stripe/portal" method="post">
        <button className="mt-6 px-5 py-3 rounded-xl bg-white text-black" type="submit">Open Customer Portal</button>
      </form>
    </div>
  );
}
