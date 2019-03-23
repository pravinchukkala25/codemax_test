<?php 

/**
* Database Class
	* =============================================================
	*/
	class Database{
		private $host = 'localhost';
		private $user = 'root';
		private $pass = '';
		private $db = 'inventory_db';
		public $mysqli;

		// Check database connection =========
		public function __construct() {
			if(!isset($this->mysqli)) {

				$this->mysqli = new mysqli($this->host, $this->user, $this->pass, $this->db);

				if (!$this->mysqli) {
					echo 'Cannot connect to database server';
					exit;
				}            
			}    

			return $this->mysqli;
		}


		// Insert Query ================
		public function insert( $table , $data)
		{
			$row = array();
			$column = array();
			foreach ( $data as $col =>$value )
			{
				$row[] = $col;
				$column[] = "'".$value."'";
			}

			$this->result = $this->mysqli->query("INSERT INTO ". $table ."(". implode(',' ,$row) .")
				VALUES (". implode(',' , $column) .")");
		}



	}


	$db = new Database();
	$db->insert(
		'manufacturer_tb', 
		array(
			'm_name' => 'demoname',
			'created_date' => date('Y-m-d H:i:s',strtotime('now'))
		)
	);