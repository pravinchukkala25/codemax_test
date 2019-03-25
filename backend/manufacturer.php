<?php 

/**
* Manufacturer Class
* =============================================================
*/
// Require Database
require_once('database.php');



class Manufacturer extends Database{

	// public $method;

	// public $database = $db;
	public function __construct(){
		parent::__construct();

	}

	public function view(){
		$result = $this->getData('manufacturer_tb');
		return $result;
	}

	public function add($data=''){
		//echo json_encode($data);
		if(!empty($data['m_name'])){
			$name = $this->mysqli->real_escape_string($data['m_name']);
			$c_date = date('Y-m-d H:i:s', strtotime('now'));
			$result = $this->insert(
				'manufacturer_tb',
				array(
					'm_name' => $name,
					'created_date' => $c_date
				)
			);
		}

	}


	/*public function edit($data = ''){
		if(isset($data['m_id'])){
			$result = $this->getSingleData('manufacturer_tb','*','m_id='. $data['m_id']);
			return $result;
		}
	}*/

	public function remove($id){
		if($this->delete('manufacturer_tb','m_id='.$id)){
			return "Data Deleted..!!";
		}
	}


}


//$man = new db;

$manufacturer = new Manufacturer;

//$veiwData = $man->view();
$method = explode('/', $_SERVER['REQUEST_URI']);

switch($method[3]) {
	case 'view':
	$manufacturer->view();
	break;
	case 'add':
	$manufacturer->add($_REQUEST);
	break;
	case 'remove':
	$id = $method[4];
	$manufacturer->remove($id);
	break;
}
