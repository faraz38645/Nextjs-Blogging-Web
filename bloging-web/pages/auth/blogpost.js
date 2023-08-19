import Form from "@/pages/profile";

export default function SignUpPage() {
    const onSubmit = async (heading, description) => {
        try {
            const response = await fetch('/api/auth/blogpost', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ heading, description })
            });

            if (response.ok) {
                alert("Sign Up Successful");
            }
        } catch (err) {
            console.error(err);
        }
    };

    return <Form  onFormSubmit={onSubmit} />
}
