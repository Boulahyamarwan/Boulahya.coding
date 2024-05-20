<body id ="page">
	  <!--main contains whole page-->
	  <!--Header link file-->
	 <?php include('header.php');?>
	  
		  <section>
				
				 <form class="login" novalidate="" action="adminPage.php" method ="POST">
					<h2 class="mb-3">Please sign in</h2>
					<div class="registration-textfield-in-login">
						  <label for="email" class = "labels-for-textbox">Username</label>
						  <input type="email" class="form-control" name="username" placeholder="Username">
						  <div class="invalid-feedback">
							Please enter a valid Username.
						  </div>
					</div>
					
					 <div class="registration-textfield-in-login">
							<label for="password" class = "labels-for-textbox">Password</label>
							 <div class="input-group">
									<div class="input-group-prepend">
									</div>
									<input type="password" class="form-control" name="password" placeholder="Password" required="">
									<div class="invalid-feedback" style="width: 100%;">
									  Your password is required.
									</div>
							 </div>
					</div>
						<button type="submit" class = "loginbutton">sign in</button>
				</form>
		  </section>

		  
	  
		
	  <!--Footer link file-->
	 <?php include('footer.php');?>

</body>
</html>




