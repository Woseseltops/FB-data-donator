function donator() 
{
  	FB.login(function()
	{
		var result = {}

		//First, ask for the birthday		
		FB.api('/me?fields=birthday', function(response) 
		{
			//Save both the birthday and the Facebook id of this user
			result['birthday'] = response['birthday']
			result['fb_id'] = response['id']

			//Then, ask for all posts
			//The limit makes avoids the posts being distributed over multiple pages
			FB.api('/me/posts?limit=999', function(response) 
			{
				//Also save the posts				
				result['posts'] = response['data']
				
				//Send the results to a script that will save them somewhere
				jQuery.ajax({type:'post',url:'save_data.php',data:result,success:function(response)
				{
					//If the response was not empty (happens for example when the user cancels the process), show a thank you message
					if(response.length > 10)
					{
						alert('Je berichten zijn binnen, hartelijk dank!')
					}
				}});
			});
		});

	//Here we set which permissions are needed
	}, {scope: 'user_posts,user_birthday'});
}

//The code below was provided by Facebook and sets up the connection to the API
//Without this, all functions starting with 'FB.' will not work
window.fbAsyncInit = function() 
{
	FB.init({
	  appId      : '1234', //Replace with the ID you can register at the FB developer site
	  xfbml      : true,
	  version    : 'v2.4'
	});
};

(function(d, s, id){
 var js, fjs = d.getElementsByTagName(s)[0];
 if (d.getElementById(id)) {return;}
 js = d.createElement(s); js.id = id;
 js.src = '//connect.facebook.net/en_US/sdk.js';
 fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
