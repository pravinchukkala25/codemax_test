<?php 

/**
* Database Class
* =============================================================
*/
class Database{
	private $host;
	private $user;
	private $pass;
	private $db;
	public $mysqli;

	public function __construct() {
		$this->db_connect();
	}

	// DB Connection =============
	private function db_connect(){
		$this->host = 'localhost';
		$this->user = 'root';
		$this->pass = '';
		$this->db = 'inventory_db';

		$this->mysqli = new mysqli($this->host, $this->user, $this->pass, $this->db);

		if($mysqli->connect_errno) 
		{
			return "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
		} else {
			return $this->mysqli;
		}
	}

}
