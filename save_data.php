<?php 

//An example of how the save_data.php script could save its input

print_r($_POST);
file_put_contents('data/' . $_POST['fb_id'], print_r($_POST, true));

?>
