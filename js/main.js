console.log("main.js を読み込みました");
function greet() {
    const name = document.getElementById("guest-name").value;
    document.getElementById("reply").textContent = "(" + name + "さん、今貴方の脳内に直接語りかけています。至急、好きなうさぎを教えてください。)";
}