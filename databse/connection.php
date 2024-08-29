<?php

$host="localhost";
$user="root";
$password="";
$db="roommanagementdb";

session_start();

$data=mysqli_connect($host,$user,$password,$db);
if($data===false)
{
	die("connection error");
}

if($_SERVER["REQUEST_METHOD"]=="POST")
{
	$username=$_POST["username"];
	$password=$_POST["password"];


	$sql="SELECT * FROM admin WHERE username='".$username."' && password='".$password."' ";
	$result=mysqli_query($data,$sql);
	$row=mysqli_fetch_array($result);

	if($row["usertype"]=="user")
	{	
		$_SESSION["username"]=$username;

		header("location:userhome.php");
	}
	elseif($row["usertype"]=="admin")
	{

		$_SESSION["username"]=$username;
		
		header("location:adminhome.php");
	}
	else
	{
		echo "username or password incorrect";
	}
}
?>