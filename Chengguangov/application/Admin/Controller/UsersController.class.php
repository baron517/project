<?php
/**申请人员控制器
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/11/9
 * Time: 14:58
 */

namespace Admin\Controller;

use Common\Controller\AdminbaseController;

class UsersController extends AdminbaseController{

    private $users_model;
    private $squadron_model;

    public function _initialize()
    {
        parent::_initialize(); // TODO: Change the autogenerated stub
        $this->users_model = D("Common/user");
        $this->squadron_model = D("Common/squadron");
    }

    public function index(){

        $users = $this->users_model
        ->alias("a")
       
        ->select();
        $this->assign("users",$users);
        $this->display();
    }

    public function add(){
        $department = $this->squadron_model->select();
        $this->assign("department",$department);
        $this->display();
    }


    public function add_post(){
        if(IS_POST){
            if ($this->users_model->create()!==false){
                if ($this->users_model->add()!==false) {
                    $this->success(L('ADD_SUCCESS'), U("users/index"));
                } else {
                    $this->error(L('ADD_FAILED'));
                }
            } else {
                $this->error($this->users_model->getError());
            }

        }
    }


    public function edit(){
        $id=I("get.id",0,'intval');
        $users=$this->users_model->where(array('uid'=>$id))->find();
        $department = $this->squadron_model->select();
        $this->assign("department",$department);
        $this->assign($users);
        $this->display();
    }


    public function edit_post(){
        if (IS_POST) {
            if ($this->users_model->create()!==false) {
                if ($this->users_model->save()!==false) {
                    $this->success("保存成功！", U("users/index"));
                } else {
                    $this->error("保存失败！");
                }
            } else {
                $this->error($this->users_model->getError());
            }
        }
    }


    public function delete(){
        $id = I("get.id",0,"intval");
        if ($this->users_model->delete($id)!==false) {
            $this->success("删除成功！");
        } else {
            $this->error("删除失败！");
        }
    }
}