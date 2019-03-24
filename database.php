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
		return $this->connect();
	}

	public function connect(){
		if(!isset($this->mysqli)) {

			$this->mysqli = mysqli_connect($this->host, $this->user, $this->pass, $this->db);

			if (!$this->mysqli) {
				echo 'Cannot connect to database server';
				exit;
			}            
		}    

		return $this->mysqli;
	}


	// Insert Query ================
	public function insert($table, $data)
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

		if($this->mysqli->query("INSERT INTO ". $table ."(". $columns .") VALUES (". $val .")")){
			echo json_encode('Inserted Data:'. $this->mysqli->affected_rows);
		} else {
			echo json_encode("Error: %s\n", $this->mysqli->sqlstate);
		}
	}


	// Return any query =====================
	public function queryAny($sql){
		$result = $this->mysqli->query($sql);
		return $result->num_rows;
	}

	// Select Query ==========================	
	public function getData($table, $sql = '*'){
		$result = $this->mysqli->query("SELECT ". $sql ." FROM " . $table);
		if($result->num_rows >= 0)
		{
			$rows = array();
			while($row = $result->fetch_assoc())
			{
				$rows[] = $row;
			}

			echo json_encode($rows);
			
		}
	}


	public function getSingleData($table, $sql = '*', $where){
		$result = $this->mysqli->query("SELECT ". $sql ." FROM " . $table . "WHERE ". $where);
		if($result->num_rows >= 0)
		{
			$rows = array();
			while($row = $result->fetch_assoc())
			{
				$rows[] = $row;
			}

			echo json_encode($rows);
			
		}
	}


	// Update Query =========================
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

	// Delete Query ========================
	public function delete($table, $where)
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

