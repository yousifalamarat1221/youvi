export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-green-100 text-gray-800 p-6">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold text-green-700 mb-4">🎉 مرحبًا بك في يوفي كاش</h1>
        <p className="text-lg text-gray-700">ابدأ رحلتك التسويقية الذكية الآن!</p>
      </section>

      <section id="how-it-works" className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 mt-10">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">🧠 كيف يعمل Youvi Cash؟</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>👀 شاهد فيديو تسويقي لمدة 30 ثانية</li>
          <li>🔗 شارك رابطك الخاص مع الآخرين</li>
          <li>📈 احصل على إحالات وأرباح حسب الباقة</li>
          <li>🛡️ كل شيء مراقب ومحمي ضد الغش</li>
        </ul>
        <p className="mt-4 text-sm text-gray-500">* تمت الإحالة من خلال: <strong>ref</strong></p>
      </section>
    </main>
  );
}
