# weather-app
Data Fetch and Error Handling:

Old Code: Only checked and updated the DOM without error handling.
New Code: Added error handling to check if data.cod === 200 to determine if the city was found, otherwise, it alerts "City not found!".
Explanation: This ensures that the user gets feedback if the city is not found in the API response.



Event Listener for Enter Key:

Old Code: Did not handle pressing Enter in the search box.
New Code: Added an event listener for the Enter key.
Explanation: This allows the user to press Enter to search for a city, improving usability.




Script Placement in HTML:

Old HTML: <script src="script.js"></script> in the head section.
New HTML: Kept the script tag at the end of the body for correct execution order.