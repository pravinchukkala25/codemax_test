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
			$values = array();
			foreach ( $data as $col =>$value )
			{
				$row[] = $col;
				$values[] = "'".$value."'";
			}

			$columns = implode(',' ,$row);
			$val = implode(',' , $values);

			$this->result = $this->mysqli->query("INSERT INTO ". $table ."(". $columns .") VALUES (". $val .")");
		}



		public function queryString($sql){
			$result = $this->mysqli->query($sql);
			return $result->num_rows;
		}

		public function getData($table, $sql = '*'){
			$result = $this->mysqli->query("SELECT ". $sql ." FROM " . $table);
			return $result->fetch_assoc();	
		}


		// Update Query
		public function update($table, $data, $where)
		{
			foreach ( $data as $col => $row )
			{
				$set[]= $col."='".$row."'" ;
			}
			$set = implode(',',$set);
			$query = "UPDATE ".$table." SET ".$set." WHERE ".$where;
			return $this->mysqli->query($query);
		}

		// Delete Query
		public function delete($table , $where)
		{
			$this->mysqli->query("DELETE FROM ".$table." WHERE ".$where);
		}



	}


	$db = new Database();
	/*$db->insert(
		'manufacturer_tb', 
		array(
			'm_name' => 'demoname1',
			'created_date' => date('Y-m-d H:i:s',strtotime('now'))
		)
	);

	$db->update(
		'manufacturer_tb', 
		array(
			'm_name' => 'demoname2',
			'modified_date' => date('Y-m-d H:i:s',strtotime('now'))
		),
		'm_id=2'
	);*/

	/*$db->delete('manufacturer_tb','m_id=2');*/
	// $db->getData('manufacturer_tb');

