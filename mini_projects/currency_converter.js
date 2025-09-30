import https from "https";
import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const converter = () => {
    const apiKey = "8f4ff2c9bfcb21438192b931";
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`

    const convertCurrency = (amount, rate) => (amount * rate).toFixed(2);

    https.get(url, (res) => {
        let data = "";

        res.on("data", (chunk) => {
            data += chunk;
        });

        res.on("end", () => {
            try {
                const response = JSON.parse(data);

                if (!response.conversion_rates) {
                    console.log("Failed to fetch conversion rates. Check API key or network.");
                    rl.close();
                    return;
                }

                const rates = response.conversion_rates;

                rl.question("Enter amount in USD: ", (amount) => {
                    if (isNaN(amount)) {
                        console.log("Please enter a valid number.");
                        rl.close();
                        return;
                    }

                    rl.question("Enter target currency: ", (currency) => {
                        const rate = rates[currency.toUpperCase()];

                        if (rate) {
                            console.log(`${amount} USD ≈ ${convertCurrency(amount, rate)} ${currency.toUpperCase()}`);
                        } else {
                            console.log("Invalid currency code.");
                        }

                        rl.close();
                    });
                });

            } catch (err) {
                console.log("Error parsing API response:", err.message);
                rl.close();
            }
        });

        res.on("error", (err) => {
            console.error("Error fetching data:", err.message);
            rl.close();
        });
    });
};

converter();
