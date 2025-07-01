const sensitivityData = {
  "poco x3": { general: 120, redDot: 85, scope2x: 80, scope4x: 75, awm: 50 },
  "iphone 12": { general: 120, redDot: 80, scope2x: 70, scope4x: 65, awm: 45 },
  "iphone 14 pro max": { general: 130, redDot: 90, scope2x: 85, scope4x: 80, awm: 55 },
  "samsung galaxy m32": { general: 122, redDot: 83, scope2x: 78, scope4x: 72, awm: 48 },
  "realme narzo 50a": { general: 121, redDot: 80, scope2x: 75, scope4x: 70, awm: 44 },
  "motorola g60": { general: 123, redDot: 82, scope2x: 78, scope4x: 71, awm: 46 },
  "xiaomi redmi note 11": { general: 122, redDot: 81, scope2x: 77, scope4x: 69, awm: 45 },
  "vivo t1": { general: 124, redDot: 83, scope2x: 78, scope4x: 70, awm: 47 },
  "infinix hot 11s": { general: 120, redDot: 79, scope2x: 74, scope4x: 67, awm: 43 }
,
  "iphone 13": { general: 125, redDot: 85, scope2x: 80, scope4x: 75, awm: 50 },
  "iphone 11": { general: 122, redDot: 83, scope2x: 78, scope4x: 74, awm: 47 },
  "iphone xr": { general: 121, redDot: 80, scope2x: 75, scope4x: 70, awm: 45 },
  "oneplus 11r": { general: 127, redDot: 88, scope2x: 84, scope4x: 80, awm: 52 },
  "realme 11x": { general: 124, redDot: 82, scope2x: 78, scope4x: 72, awm: 46 },
  "redmi note 12 pro": { general: 125, redDot: 85, scope2x: 80, scope4x: 75, awm: 48 },
  "samsung a14": { general: 121, redDot: 80, scope2x: 75, scope4x: 70, awm: 44 },
  "oppo a78": { general: 122, redDot: 82, scope2x: 78, scope4x: 73, awm: 45 },
  "vivo y100": { general: 123, redDot: 83, scope2x: 79, scope4x: 74, awm: 46 },
  "realme narzo 60x": { general: 124, redDot: 84, scope2x: 80, scope4x: 76, awm: 47 },
  "infinix zero 5g": { general: 125, redDot: 85, scope2x: 80, scope4x: 75, awm: 48 },
  "tecno camon 20 pro": { general: 124, redDot: 83, scope2x: 78, scope4x: 74, awm: 46 },
  "samsung m14": { general: 122, redDot: 81, scope2x: 76, scope4x: 70, awm: 44 },
  "poco f5": { general: 130, redDot: 90, scope2x: 85, scope4x: 80, awm: 55 },
  "iqoo neo 7": { general: 129, redDot: 89, scope2x: 84, scope4x: 78, awm: 54 },
  "asus rog phone 6": { general: 135, redDot: 92, scope2x: 88, scope4x: 84, awm: 56 },
  "nubia red magic 8 pro": { general: 136, redDot: 94, scope2x: 89, scope4x: 85, awm: 57 }
,
  "redmi note 11": { general: 123, redDot: 82, scope2x: 78, scope4x: 74, awm: 46 },
  "redmi note 11 pro": { general: 124, redDot: 84, scope2x: 79, scope4x: 75, awm: 47 },
  "redmi 12c": { general: 120, redDot: 79, scope2x: 75, scope4x: 71, awm: 44 },
  "realme 10 pro": { general: 126, redDot: 85, scope2x: 81, scope4x: 77, awm: 49 },
  "realme 9i": { general: 122, redDot: 81, scope2x: 77, scope4x: 72, awm: 45 },
  "realme 8": { general: 121, redDot: 80, scope2x: 76, scope4x: 71, awm: 44 },
  "realme gt neo 2": { general: 129, redDot: 88, scope2x: 83, scope4x: 78, awm: 53 },
  "oneplus 9": { general: 130, redDot: 89, scope2x: 84, scope4x: 79, awm: 54 },
  "oneplus nord 2": { general: 128, redDot: 87, scope2x: 82, scope4x: 77, awm: 52 },
  "oneplus 8t": { general: 127, redDot: 86, scope2x: 81, scope4x: 76, awm: 51 },
  "samsung galaxy a54": { general: 126, redDot: 85, scope2x: 81, scope4x: 76, awm: 49 },
  "samsung galaxy a34": { general: 124, redDot: 83, scope2x: 78, scope4x: 74, awm: 47 },
  "samsung galaxy m33": { general: 123, redDot: 82, scope2x: 77, scope4x: 73, awm: 46 },
  "samsung galaxy f23": { general: 122, redDot: 81, scope2x: 76, scope4x: 72, awm: 45 },
  "oppo reno 7": { general: 125, redDot: 84, scope2x: 79, scope4x: 75, awm: 48 },
  "oppo f21 pro": { general: 124, redDot: 83, scope2x: 78, scope4x: 74, awm: 47 },
  "vivo y21": { general: 119, redDot: 78, scope2x: 74, scope4x: 70, awm: 43 },
  "vivo t1": { general: 122, redDot: 81, scope2x: 77, scope4x: 72, awm: 45 },
  "vivo y22": { general: 120, redDot: 79, scope2x: 75, scope4x: 71, awm: 44 },
  "vivo v25": { general: 126, redDot: 85, scope2x: 80, scope4x: 76, awm: 49 },
  "motorola moto g82": { general: 125, redDot: 84, scope2x: 79, scope4x: 74, awm: 48 },
  "motorola edge 20": { general: 128, redDot: 87, scope2x: 82, scope4x: 77, awm: 52 },
  "infinix hot 20": { general: 120, redDot: 79, scope2x: 75, scope4x: 71, awm: 44 },
  "infinix note 12": { general: 121, redDot: 80, scope2x: 76, scope4x: 72, awm: 45 },
  "tecno pova 4": { general: 122, redDot: 81, scope2x: 77, scope4x: 73, awm: 46 },
  "tecno spark 9": { general: 119, redDot: 78, scope2x: 74, scope4x: 70, awm: 43 },
  "iqoo z6": { general: 124, redDot: 83, scope2x: 79, scope4x: 75, awm: 47 },
  "iqoo neo 6": { general: 128, redDot: 87, scope2x: 82, scope4x: 77, awm: 52 },
  "asus zenfone 8": { general: 131, redDot: 90, scope2x: 85, scope4x: 80, awm: 55 },
  "iqoo 7": { general: 127, redDot: 86, scope2x: 81, scope4x: 76, awm: 50 },
  "iqoo 7 legend": { general: 128, redDot: 87, scope2x: 82, scope4x: 77, awm: 51 },
  "iqoo 9": { general: 129, redDot: 88, scope2x: 83, scope4x: 78, awm: 52 },
  "iqoo 9 pro": { general: 131, redDot: 90, scope2x: 85, scope4x: 80, awm: 54 },
  "iqoo neo 6": { general: 128, redDot: 87, scope2x: 82, scope4x: 77, awm: 52 },
  "iqoo z6": { general: 124, redDot: 83, scope2x: 79, scope4x: 75, awm: 47 },
  "iqoo z7": { general: 125, redDot: 84, scope2x: 80, scope4x: 76, awm: 48 },
  "iqoo z5": { general: 123, redDot: 82, scope2x: 78, scope4x: 73, awm: 46 },
  "iqoo 11": { general: 132, redDot: 91, scope2x: 86, scope4x: 81, awm: 55 },
  "iqoo 11 pro": { general: 133, redDot: 92, scope2x: 87, scope4x: 82, awm: 56 }

};

function showDropdown() {
  const input = document.getElementById("phoneInput");
  const dropdown = document.getElementById("dropdown");
  const query = input.value.toLowerCase().trim();
  dropdown.innerHTML = "";

  if (!query) {
    dropdown.classList.add("hidden");
    return;
  }

  const matches = Object.keys(sensitivityData).filter(phone => phone.includes(query));
  if (matches.length === 0) {
    dropdown.classList.add("hidden");
    return;
  }

  matches.forEach(phone => {
    const item = document.createElement("div");
    item.textContent = phone;
    item.onclick = () => {
      input.value = phone;
      dropdown.classList.add("hidden");
    };
    dropdown.appendChild(item);
  });

  dropdown.classList.remove("hidden");
}

function getSensitivity() {
  const input = document.getElementById("phoneInput").value.toLowerCase().trim();
  const ram = document.getElementById("ramSelect").value;
  const resultDiv = document.getElementById("result");
  document.getElementById("dropdown").classList.add("hidden");

  if (sensitivityData[input]) {
    const s = { ...sensitivityData[input] };
    if (ram === "2GB") s.general -= 5;
    else if (ram === "3GB") s.general -= 3;
    else if (ram === "4GB") s.general -= 2;
    else if (ram === "6GB") s.general += 0;
    else if (ram === "8GB") s.general += 5;
    else if (ram === "12GB" || ram === "16GB") s.general += 7;
    if (s.general < 0) s.general = 0;

    resultDiv.classList.remove("hidden");
    resultDiv.innerHTML = `<h3>🎯 Sensitivity for <span style="color:#00ffcc">${input.toUpperCase()}</span></h3>
      <p><strong>RAM:</strong> ${ram || "Not selected"}</p>
      <ul>
        <li><strong>General:</strong> ${s.general}</li>
        <li><strong>Red Dot:</strong> ${s.redDot}</li>
        <li><strong>2x Scope:</strong> ${s.scope2x}</li>
        <li><strong>4x Scope:</strong> ${s.scope4x}</li>
        <li><strong>AWM:</strong> ${s.awm}</li>
      </ul>`;
    resultDiv.scrollIntoView({ behavior: 'smooth' });
  } else {
    resultDiv.classList.remove("hidden");
    resultDiv.innerHTML = `<p>❌ No data found for "<strong>${input}</strong>". Try another phone model.</p>`;
    resultDiv.scrollIntoView({ behavior: 'smooth' });
  }
}

document.addEventListener("click", function (event) {
  const input = document.getElementById("phoneInput");
  const dropdown = document.getElementById("dropdown");
  if (!input.contains(event.target) && !dropdown.contains(event.target)) {
    dropdown.classList.add("hidden");
  }
document.getElementById('sensiBtn').addEventListener('click', () => {
  window.location.href = 'sensi-files.html';
});
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById('sensiBtn').addEventListener('click', () => {
    window.location.href = 'sensi-files.html';
  });
});

});
