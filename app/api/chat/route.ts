export async function POST(req: Request) {
    const { messages } = await req.json();
    try {
        const url = "https://studious-space-xylophone-xvw65v5xp94364p5-3000.app.github.dev/openai/agent"
      const res = await fetch(
        url,
        {
          method: "POST",
          prompt: messages
        }
      );
      const data = await res.json();
  
      return new Response(data.text, {
        status: 200,
      });
    } catch (error) {
      console.error("Error retrieving access token:", error);
  
      return new Response("Failed to retrieve access token", {
        status: 500,
      });
    }
  }