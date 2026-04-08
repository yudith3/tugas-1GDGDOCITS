const participants = [];
const form = document.getElementById("registration-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const levelSelect = document.getElementById("level");
const waCheckbox = document.getElementById("join-wa");
const participantsList = document.getElementById("participants-list");
const errorEl = document.getElementById("error-message");
const successEl = document.getElementById("success-message");

function renderParticipants() {
    participantsList.innerHTML = "";
    for (const p of participants) {
        const div = document.createElement("div");
        div.className = "participant-item";
        div.innerHTML = `
            <div class="avatar"></div>
            <div class="participant-info">
                <span class="name">${p.name}</span>
                <span class="level">${p.level}</span>
                ${p.joinWA ? '<span class="wa-tag">Bergabung WA</span>' : ''}
            </div>
        `;
        participantsList.appendChild(div);
    }
}

function addParticipant(participant) {
    participants.push(participant);
    renderParticipants();
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const level = levelSelect.value;
    const joinWA = waCheckbox.checked; 
    if (!name || !email) {
        errorEl.textContent = "Nama dan email wajib diisi.";
        successEl.textContent = "";
        return; 
    }
    if (!email.includes("@")) {
        errorEl.textContent = "Masukkan alamat email yang valid.";
        successEl.textContent = "";
        return;
    }
    errorEl.textContent = "";
    addParticipant({ name, email, level, joinWA });
    form.reset();
    successEl.textContent = "Pendaftaran berhasil dikirim!";
    setTimeout(() => {
        successEl.textContent = "";
    }, 5000);
});
renderParticipants();