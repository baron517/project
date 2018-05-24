<?php
namespace Api\Controller;
use Think\Controller;

class CommonnApiController extends Controller{
    
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
    
    
    //添加微信数据
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

    //微信用户信息添加
    public function inforadd(){
        $data["openid"]=$_GET["openid"];
		
		 $openid = M("user");
        $res = $openid->where($data)->find();
        
        if($res){
            echo 3;
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
    
		  //获取微信用户信息
    public function user(){
        $data["openid"] = $_GET["openid"];
        $user = M("user");
        $userList = $user->where($data)->find();
        echo json_encode($userList);
        exit();
    }
    
     //申请中队API
    public function squadron(){
        
        $squadron = M("squadron");
        $squadList = $squadron->select();
        echo json_encode($squadList);
        exit();
    }
    
    //个人中心
    public function person(){
        $data["openid"] = $_GET["openid"];
        $user = M("user");
        $userList = $user->where($data)->find();
        echo json_encode($userList);
        exit();
    }
    
    
    //个人信息表单提交
    public function personsadd(){
        
      if(empty($_GET['uname'])){
           echo 3;  //没有输入姓名
           exit();
        }
            
        
        
        $where["openid"] = $_GET["openid"];
        $data["uname"] = $_GET["uname"];
        $data["phone"] = $_GET["phone"];
       
        $user = M("user");
        $dataList = $user->where($where)->save($data);

        if($dataList){
            echo 1;    //保存成功
            exit();
        }else{
            echo 2;    //保存失败
            exit();
        }
    }
    
} 
