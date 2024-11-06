function toggleForm() {
    const signupForm = document.getElementById('signup-form');
    const signinForm = document.getElementById('signin-form');
    if (signupForm.style.display === 'none') {
        signupForm.style.display = 'block';
        signinForm.style.display = 'none';
    } else {
        signupForm.style.display = 'none';
        signinForm.style.display = 'block';
    }
}

async function signup() {
    const email = document.getElementById('signup-email').value;
    const fullname = document.getElementById('signup-fullname').value;
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    const response = await fetch('/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, fullname, username, password }),
    });

    const result = await response.json();
    alert(result.message);
}

async function signin() {
    const username = document.getElementById('signin-username').value;
    const password = document.getElementById('signin-password').value;

    const response = await fetch('/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

    const result = await response.json();
    alert(result.message);
}
