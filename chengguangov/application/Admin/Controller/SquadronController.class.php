<?php
/**中队管理
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/11/20
 * Time: 11:49
 */

namespace Admin\Controller;

use Common\Controller\AdminbaseController;

class SquadronController extends AdminbaseController{

    private $squadron_model;


    public function _initialize()
    {
        parent::_initialize(); // TODO: Change the autogenerated stub
        $this->squadron_model = D("Common/squadron");
    }

    public function index(){

        $squadron = $this->squadron_model->select();
        $this->assign("squadron",$squadron);
        $this->display();
    }

    public function add(){
        $this->display();
    }


    public function add_post(){
        if(IS_POST){
            if ($this->squadron_model->create()!==false){
                if ($this->squadron_model->add()!==false) {
                    $this->success(L('ADD_SUCCESS'), U("squadron/index"));
                } else {
                    $this->error(L('ADD_FAILED'));
                }
            } else {
                $this->error($this->squadron_model->getError());
            }

        }
    }


    public function edit(){
        $id=I("get.id",0,'intval');
        $squadron=$this->squadron_model->where(array('sid'=>$id))->find();
        $this->assign($squadron);
        $this->display();
    }


    public function edit_post(){
        if (IS_POST) {
            if ($this->squadron_model->create()!==false) {
                if ($this->squadron_model->save()!==false) {
                    $this->success("保存成功！", U("squadron/index"));
                } else {
                    $this->error("保存失败！");
                }
            } else {
                $this->error($this->squadron_model->getError());
            }
        }
    }


    public function delete(){
        $id = I("get.id",0,"intval");
        if ($this->squadron_model->delete($id)!==false) {
            $this->success("删除成功！");
        } else {
            $this->error("删除失败！");
        }
    }
}