export function gEvent(event: string, data: any) {
  if (gtag) {
    gtag("event", event, data);
  }
}

export function gWon(guesses: number, city: string) {
  gEvent("won", {
    guesses,
    city,
  });
}

export function gLost(city: string) {
  gEvent("lose", { city });
}

export function gGuessed(guesses: number, city: string) {
  gEvent("guessed", { guesses, city });
}
