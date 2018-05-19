<?php
/**
 * API处理
 */
namespace Api\Controller;

use Think\Controller;

class CommonApiController extends Controller {

    private function curl_https($url, $data=array(), $header=array(), $timeout=30){

			$ch = curl_init();
			curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); // 跳过证书检查
			//curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, true);  // 从证书中检查SSL加密算法是否存在
			curl_setopt($ch, CURLOPT_URL, $url);
			curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
			curl_setopt($ch, CURLOPT_POST, true);
			curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
			curl_setopt($ch, CURLOPT_TIMEOUT, $timeout);

			$response = curl_exec($ch);

			if($error=curl_error($ch)){
				die($error);
			}

			curl_close($ch);

			return $response;

		}

     //个人信息表单提交
    public function personadd(){
       
      if(empty($_GET['uname'])){
           echo 3;  //没有输入姓名
           exit();
        }
        
        $where["openid"] = $_GET["openid"];
        $data["uname"] = $_GET["uname"];
        $data["phone"] = $_GET["phone"];
        $data["udepartment"] = $_GET["udepartment"];
       
        $user = M("user");
        $dataList = $user->where($where)->save($data);

       echo 1;
       exit();
    }


    //获取openid
    public function wxdata(){
        $appid = "wx2073627ee3a2d7e4";
        $appSecret="866e22be7004df088721cbc7d9c744bc";
        $code=$_GET["code"];
	    
	    //sp_log($code);
	    
	    $url="https://api.weixin.qq.com/sns/jscode2session?appid=".$appid."&secret=".$appSecret."&js_code=".$code."&grant_type=authorization_code";
	    
    	$data = array();
		$header = array();

		$response = $this->curl_https($url, $data, $header, 5);
		
		//sp_log($response);
	
		
		$rsObj=json_decode($response,1);
		
		$openid = $rsObj["openid"];
		echo $openid;
		exit();
    }

    //申请中队API
    public function squadron(){
        
        $squadron = M("squadron");
        $squadList = $squadron->select();
        echo json_encode($squadList);
        exit();
    }
    
    //餐厅
    public function restaurant(){
        $restaurant = M("restaurant");
        $resList = $restaurant->select();
        echo json_encode($resList);
        exit();
    }
    
    //加班人员
    public function person(){
        $where["udepartment"] = $_GET["sid"];
        $where["ufrist_auditor"] = 0;
        $where["usenior_auditor"] = 0;
        $users = M("user");
        $userList = $users
        ->field("uid,uname")
        ->where($where)
        ->select();
        echo json_encode($userList);
        exit();
    }
    
    //第一审批人
    public function fristper(){
        $users = M("user");
        $fristList = $users->where("ufrist_auditor = 1")->select();
        echo json_encode($fristList);
        exit();
    }
    
     //第二审批人
    public function fristperList(){
        $users = M("user");
        $fristList = $users->where("usenior_auditor = 1")->select();
        echo json_encode($fristList);
        exit();
    }
    
    //微信用户信息添加
    public function inforadd(){
        $data["openid"]=$_GET["openid"];
		$where["openid"] = $_GET["openid"];
		$openid = M("user");
        $res = $openid->where($data)->find();
        
        
       
        
       
        
        if($res){
            $userList = $openid->where($where)->select();
    		echo json_encode($userList);
            exit();
        }else{
		
    		$data["nickname"] = $_GET["nickname"];
    		
    		$user = M("user");
    		$res = $user->add($data);
    		if($res){
    		    echo 1;
    		    exit();
    		}else{
    		    echo 2;
    		    exit();
    		}
        }
       
    }
    
    //办公室申请提交
    public function apply(){
        $data["rsquad"] = $_GET["zhongdui"];
        $data["rhandler"] = $_GET["jingban"];
        $data["rword"] = $_GET["liyou"];
        $data["rpeonum"] = $_GET["renshu"];
        $data["rperson"] = $_GET["renyuan"];
        $data["rmeal_time"] = $_GET["time"];
        $data["rmeal_class"] = $_GET["biaozhun"];
        $data["rmeal_place"] = $_GET["canting"]; 
        $data["rmeal_amount"] = $_GET["money"]; 
        $data["rprimary_person"] = $_GET["fristshenpi"]; 
        $data["r_openid"] = $_GET["openid"];
        
        $where["openid"] = $_GET["openid"];
        $user = M("user");
        $res = $user->where($where)->find();
        $resdata["uname"] = $res["uname"];
        $resdata["udepartment"] = $res["udepartment"];
        
        
         if($resdata["uname"] == null && $resdata["udepartment"] == null){
         
            echo 4; //没有填写资料
            exit();
        
             
         }
        if(empty($_GET["jingban"]) || empty($_GET["liyou"]) || empty($_GET["renyuan"]) || empty($_GET["time"]) || empty($_GET["biaozhun"]) || empty($_GET["money"])){
            echo 3; //请输入完整的信息
            exit();
        }
        $requisition = M("requisition");
        $requadd = $requisition->add($data);
        if($requadd){
            echo 1; //添加成功
            exit();
        }else{
            echo 2; //添加失败
            exit();
        }
               
    }
    
    //查看申请表
    public function applychakan(){
        $openid = $_GET["openid"];
       
        $requisition = M("requisition");
        $applyList = $requisition
        ->alias("a")
        //->join("dg_user on a.r_openid = dg_user.openid")
        ->where("r_openid = $openid")
        ->select();
        echo json_encode($applyList);
        exit();
        
    }
    
   
    public function getPerson(){
        $where["openid"] = $_GET["openid"];
        $users = M("user");
        $userList = $users
        ->where($where)
        ->find();
        echo json_encode($userList);
        exit();
    }
   
   //获取审批列表
   public function getShenpi()
   {
       
        $where["rprimary_person"] = $_GET["uid"];
        if($_GET["typestr"]==1)
        {
            $where["rpri_frist"]=2;
        }
        else{
            $where["rpri_frist"]=array('neq',2);;
            $where["rpri_radva"]=array('eq',2);;
        }
        
        
        $requisition = M("requisition");
        $userList = $requisition
        ->where($where)
        ->select();
        echo json_encode($userList);
        exit();
       
   }
   
    //获取自己的审批列表
   public function getMyShenpi()
   {
       
        $where["r_openid"] = $_GET["openid"];
       
        $requisition = M("requisition");
        $userList = $requisition
        ->where($where)
        ->select();
        echo json_encode($userList);
        exit();
       
   }
   
   //获取审批详情
   public function getShenpiDetail()
   {
       
        
        $where["rid"] = $_GET["rid"];
        $requisition = M("requisition");
        $userList = $requisition
        ->where($where)
        ->find();
        echo json_encode($userList);
        exit();
       
   }
   
   
   //审核
   public function shenheSave()
   {
       
        $where["rid"] = $_GET["rid"];
        $typestr= $_GET["typestr"];
        
        
        
        
        if($typestr==1)
        {
            $data["rprimary_lingdao"]= $_GET["erji"];
            $data["rpri_frist"]=$_GET["statusValue"];
        }
        else{
            
            $data["rpri_radva"]=$_GET["statusValue"];
            
        }
        
        
        
        $requisition = M("requisition");
        $rs=$userList = $requisition
        ->where($where)
        ->save($data);
        
       
        echo 1;
        
        exit();
       
   }
   

}

