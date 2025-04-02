

function mysteryOperation ()
{
	const outcome = Math.random(); // Generates a random number between 0 and 1.

	if (outcome < 0.5)
	{
		console.log("The operation is completed successfully!");
	}
	else
	{
		throw new Error("The operation is failed mysteriously!");
	}
}
function calculateVacation() {
	let totalVacationDays = 0;
    const totalMissions = 20;

	for (let i = 0; i < totalMissions; i++)
	{
		try {
            mysteryOperation();
            totalVacationDays += 13 + 3;
        } catch (error) {
            console.error("Mission failed:", error.message);
            totalVacationDays += 1 + 3;
        } finally {
            // This block will always execute after try or catch.
        }
    }

    console.log("Total vacation days earned: " + totalVacationDays);
}

calculateVacation();