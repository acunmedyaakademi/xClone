const SUPABASE_URL = "https://qgfzhljjdevicwupkqhf.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFnZnpobGpqZGV2aWN3dXBrcWhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUyNTUzNzUsImV4cCI6MjAzMDgzMTM3NX0.ZUDmyuppbkXAWMm-Y_sAYelSKGgj5swh_PZ6__Ta_C0"
const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
const registerForm = document.querySelector("#registerForm")

registerForm.addEventListener("submit", register);

async function register(e){
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target))
    const { data, error } = await _supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
    })
}
