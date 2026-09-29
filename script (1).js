// DATA STRUCTURE - Separated Data as Required
const maqwaData = {
    services: [
        { id: 1, name: "Cuci + Gosok", price: "Rp 5.000/kg", time: "1-2 Hari", desc: "Solusi lengkap pakaian bersih, harum, dan rapi siap pakai.", icon: "sparkles" },
        { id: 2, name: "Cuci + Lipat", price: "Rp 3.500/kg", time: "1-2 Hari", desc: "Pembersihan pakaian praktis, harum, dan dilipat rapi.", icon: "shirt" },
        { id: 3, name: "Gosok Saja", price: "Rp 3.500/kg", time: "1 Hari", desc: "Pakaian disetrika rapi dengan pelicin & pewangi khusus.", icon: "flame" },
        { id: 4, name: "Bed Cover", price: "Mulai Rp 25.000", time: "2-3 Hari", desc: "Pencucian deep-clean untuk perlengkapan tidur bebas debu.", icon: "bed" },
        { id: 5, name: "Sprei", price: "Mulai Rp 15.000", time: "1-2 Hari", desc: "Sprei lembut, harum, dan segar untuk kenyamanan tidur.", icon: "layers" },
        { id: 6, name: "Selimut", price: "Mulai Rp 20.000", time: "1-2 Hari", desc: "Selimut tebal menjadi harum dan higienis kembali.", icon: "sun" },
        { id: 7, name: "Boneka", price: "Mulai Rp 15.000", time: "2-3 Hari", desc: "Pembersihan lembut untuk boneka kesayangan tanpa merusak.", icon: "smile" },
        { id: 8, name: "Sepatu", price: "Rp 10.000/pasang", time: "2 Hari", desc: "Cuci sepatu bersih dari sol hingga upper tanpa merusak bahan.", icon: "footprints" }
    ],
    testimonials: [
        { name: "Rina S.", role: "Mahasiswi UNRI", rating: 5, text: "Sangat membantu buat anak kos! Hasilnya wangi banget dan baju lipatannya rapi. Penjemputannya juga cepat!" },
        { name: "Ahmad Fauzi", role: "Karyawan Swasta", rating: 5, text: "Selalu langganan Cuci + Gosok di Maqwa Laundry. Harganya bersahabat banget di kantong dan selalu tepat waktu." },
        { name: "Siti Rahma", role: "Ibu Rumah Tangga", rating: 5, text: "Bed cover dan sprei dicuci bersih dan wangi tahan lama. Recommended laundry di daerah Elang Sakti Pekanbaru!" }
    ],
    faqs: [
        { q: "Berapa lama proses pengerjaan laundry?", a: "Layanan reguler selesai dalam 1-2 hari kerja. Kami juga menyediakan opsi pengerjaan express sesuai permintaan." },
        { q: "Apakah ada fasilitas penjemputan pakaian?", a: "Ya! Kami melayani request penjemputan dan pengantaran pakaian langsung ke lokasi/kos Anda via pesan WhatsApp." },
        { q: "Bagaimana sistem pembayaran?", a: "Pembayaran dapat dilakukan secara tunai (cash) saat penjemputan/pengantaran, maupun via transfer bank/QRIS." },
        { q: "Apakah menerima laundry satuan?", a: "Tentu, kami menerima laundry satuan seperti Bed Cover, Sprei, Selimut, Boneka, hingga Sepatu." }
    ]
};

// Render Services Cards
function renderServices() {
    const container = document.getElementById('services-grid');
    container.innerHTML = maqwaData.services.map(s => `
        <div class="glass-card rounded-3xl p-6 shadow-md hover:shadow-xl transition-all border border-white hover:-translate-y-1 flex flex-col justify-between group">
            <div>
                <div class="w-12 h-12 rounded-2xl bg-maqwa-light text-maqwa-purple flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <i data-lucide="${s.icon}" class="w-6 h-6"></i>
                </div>
                <h3 class="font-bold text-gray-800 text-lg mb-1">${s.name}</h3>
                <p class="text-xs text-gray-500 mb-3">${s.desc}</p>
            </div>
            <div class="pt-4 border-t border-gray-100 flex items-center justify-between">
                <div>
                    <span class="text-[10px] text-gray-400 block">Estimasi: ${s.time}</span>
                    <span class="font-bold text-maqwa-purple text-sm">${s.price}</span>
                </div>
                <button onclick="openOrderModal('${s.name}')" class="p-2.5 rounded-xl bg-maqwa-purple text-white hover:bg-maqwa-deep transition-colors shadow-md">
                    <i data-lucide="plus" class="w-4 h-4"></i>
                </button>
            </div>
        </div>
    `).join('');
}

// Render Price List Table
function renderPriceTable() {
    const tbody = document.getElementById('price-table-body');
    tbody.innerHTML = maqwaData.services.map(s => `
        <tr class="hover:bg-purple-50/50 transition-colors">
            <td class="py-3.5 font-semibold text-gray-800 flex items-center gap-2">
                <i data-lucide="${s.icon}" class="w-4 h-4 text-maqwa-purple"></i>
                <span>${s.name}</span>
            </td>
            <td class="py-3.5 text-gray-500 text-xs">${s.time}</td>
            <td class="py-3.5 font-bold text-maqwa-purple">${s.price}</td>
            <td class="py-3.5 text-center">
                <button onclick="openOrderModal('${s.name}')" class="px-3 py-1.5 rounded-lg bg-maqwa-purple/10 text-maqwa-purple hover:bg-maqwa-purple hover:text-white font-semibold text-xs transition-all">
                    Pesan
                </button>
            </td>
        </tr>
    `).join('');
}

// Render Testimonials
function renderTestimonials() {
    const container = document.getElementById('testimonials-grid');
    container.innerHTML = maqwaData.testimonials.map(t => `
        <div class="glass-card rounded-3xl p-6 shadow-md border border-white flex flex-col justify-between space-y-4">
            <div class="space-y-2">
                <div class="flex text-yellow-400">
                    ${'★'.repeat(t.rating)}
                </div>
                <p class="text-xs text-gray-600 italic">"${t.text}"</p>
            </div>
            <div class="flex items-center gap-3 pt-2 border-t border-gray-100">
                <div class="w-9 h-9 rounded-full bg-maqwa-lavender/40 text-maqwa-deep font-bold flex items-center justify-center text-xs">
                    ${t.name.charAt(0)}
                </div>
                <div>
                    <h4 class="font-bold text-xs text-gray-800">${t.name}</h4>
                    <p class="text-[10px] text-gray-400">${t.role}</p>
                </div>
            </div>
        </div>
    `).join('');
}

// Render FAQs
function renderFAQs() {
    const container = document.getElementById('faq-accordion');
    container.innerHTML = maqwaData.faqs.map((f, i) => `
        <div class="glass-card rounded-2xl border border-white overflow-hidden shadow-sm">
            <button onclick="toggleFaq(${i})" class="w-full p-5 text-left font-bold text-gray-800 flex items-center justify-between gap-4 text-sm hover:text-maqwa-purple transition-colors">
                <span>${f.q}</span>
                <i data-lucide="chevron-down" id="faq-icon-${i}" class="w-5 h-5 text-maqwa-purple transition-transform"></i>
            </button>
            <div id="faq-answer-${i}" class="hidden px-5 pb-5 text-xs text-gray-600 leading-relaxed border-t border-gray-100/60 pt-3">
                ${f.a}
            </div>
        </div>
    `).join('');
}

function toggleFaq(index) {
    const ans = document.getElementById(`faq-answer-${index}`);
    const icon = document.getElementById(`faq-icon-${index}`);
    ans.classList.toggle('hidden');
    icon.classList.toggle('rotate-180');
}

// Calculator Logic
function updateCalculator() {
    const price = parseInt(document.getElementById('calc-service').value);
    const weight = parseFloat(document.getElementById('calc-weight').value) || 0;
    const total = price * weight;
    document.getElementById('calc-total').innerText = `Rp ${total.toLocaleString('id-ID')}`;
}

document.getElementById('calc-service').addEventListener('change', updateCalculator);
document.getElementById('calc-weight').addEventListener('input', updateCalculator);

// Modal Order Logic
function openOrderModal(serviceName = '') {
    if (serviceName) {
        const select = document.getElementById('order-service');
        for (let option of select.options) {
            if (option.value.toLowerCase().includes(serviceName.toLowerCase())) {
                select.value = option.value;
                break;
            }
        }
    }
    document.getElementById('order-modal').classList.remove('hidden');
}

function openOrderModalWithCalc() {
    const serviceText = document.getElementById('calc-service').options[document.getElementById('calc-service').selectedIndex].text;
    const weight = document.getElementById('calc-weight').value;
    openOrderModal(serviceText);
    document.getElementById('order-weight').value = `${weight} kg`;
}

function closeOrderModal() {
    document.getElementById('order-modal').classList.add('hidden');
}

// WhatsApp Integration
function sendWaOrder(e) {
    e.preventDefault();
    const phone = "6282364392030"; // Official WhatsApp
    const name = document.getElementById('order-name').value;
    const address = document.getElementById('order-address').value;
    const service = document.getElementById('order-service').value;
    const weight = document.getElementById('order-weight').value || "-";
    const method = document.getElementById('order-method').value;
    const note = document.getElementById('order-note').value || "-";

    const text = `Halo Maqwa Laundry.%0ASaya ingin memesan layanan laundry.%0A%0A*Nama:* ${name}%0A*Alamat:* ${address}%0A*Jenis Laundry:* ${service}%0A*Berat / Jumlah:* ${weight}%0A*Metode:* ${method}%0A*Catatan/Promo:* ${note}%0A%0AMohon informasi lebih lanjut. Terima kasih!`;

    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
    closeOrderModal();
}

// Mobile Menu Toggle
document.getElementById('menu-btn').addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.toggle('hidden');
});

// Initialize Everything
window.addEventListener('DOMContentLoaded', () => {
    renderServices();
    renderPriceTable();
    renderTestimonials();
    renderFAQs();
    updateCalculator();
    lucide.createIcons();
});
