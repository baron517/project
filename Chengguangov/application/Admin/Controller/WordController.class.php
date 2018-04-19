<?php
/**文档控制器
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/11/20
 * Time: 13:34
 */

namespace Admin\Controller;

use Common\Controller\AdminbaseController;

class WordController extends AdminbaseController{

    private $word_model;

    public function _initialize()
    {
        parent::_initialize(); // TODO: Change the autogenerated stub
        $this->word_model = D("Common/word");
    }

    public function index(){
        $word = $this->word_model->select();
        $this->assign("word",$word);

        $this->display();
    }
}