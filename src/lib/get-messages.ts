export async function getMessages(locale: string) {
  try {
    const messages = (await import(`../messages/${locale}.json`)).default;
    return messages;
  } catch (err) {
    console.error("Failed to load messages for locale:", locale, err);
    throw err;
  }
}
