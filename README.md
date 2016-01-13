# FB-data-donator
A Javascript template that connects to the Facebook Graph API to collect information about Facebook users donating their information to research.

The Javascript that needs to be run when for example the 'Donate' button is clicked can be found in donator.js. A Facebook app ID is needed, which can be created at the developer's portal of Facebook.com .

The script sends the collected data to another script that can save it. The file save_data.php is a simple example PHP script that writes the data to files.
