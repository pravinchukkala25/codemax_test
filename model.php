<?php 

require_once('manufacturer.php');

class Model extends Manufacturer{
	public function __construct(){
		parent::__construct();
	}


	public function viewModel(){
		$result = $this->getData('models');
		return $result;
	}

	public function addModel($data=''){
		if(!empty($data['model_name'])){

			$name = $this->mysqli->real_escape_string($data['model_name']);
			$color = $this->mysqli->real_escape_string($data['color']);
			$m_year = $this->mysqli->real_escape_string($data['m_date']);
			$reg_no = $this->mysqli->real_escape_string($data['reg_no']);
			$m_id = $this->mysqli->real_escape_string($data['m_id']);
			$note = $this->mysqli->real_escape_string($data['note']);
			$c_date = date('Y-m-d H:i:s', strtotime('now'));
			$result = $this->insert(
				'models',
				array(
					'model_name' => $name,
					'm_id' => $m_id,
					'color' => $color,
					'm_year' => $m_year,
					'reg_no' => $reg_no,
					'note' => $note,
					'c_date' => $c_date
				)
			);

			return $result;

		}

	}

	public function editModel($data = ''){
		if(isset($data['m_id'])){
			$result = $this->getSingleData('models','*','id='. $data['m_id']);
			return $result;
		}
	}

	public function removeModel($id){
		if($this->delete('models','id='.$id)){
			return "Data Deleted..!!";
		}
	}

}


//$man = new db;

$model = new Model;

//$veiwData = $man->view();
$method = explode('/', $_SERVER['REQUEST_URI']);
switch($method[3]) {
	case 'viewModel':
	$model->viewModel();
	break;
	case 'addModel':
	$model->addModel($_REQUEST);
	break;
	case 'editModel':
	$model->editModel($_REQUEST);
	break;
	case 'removeModel':
	$id = $method[4];
	$model->removeModel($id);
	break;
}
