const message = `
Happy Birthday.

I don’t know how to begin this without sounding vulnerable, but maybe that’s the point. Some people enter our lives loudly, and some arrive quietly — and somehow change everything without trying. You’re one of those people for me.

There’s a calm I feel when I think of you, a softness that settles in places that were once restless. You make things feel lighter without fixing them, and that means more than you probably realize.

On your birthday, I wish for you the kind of happiness that stays. The kind that doesn’t rush, doesn’t demand, and doesn’t fade easily. You mean the world to me always remember that,I want to see you win in your life that's all I want for you. 

Thank you for being you.
I’m really grateful you exist.
`;

let i = 0;
const speed = 38;

function typeWriter() {
  if (i < message.length) {
    document.getElementById("text").innerHTML += message.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();
