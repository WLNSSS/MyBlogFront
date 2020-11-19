
<template>
    <div>
        <Row>
        <Menu mode="horizontal" theme="light" active-name="1">
        <Col span="1" offset="6" class="icon-logo">
            <Icon type="logo-octocat" size="30" />
        </Col>
        <Col span="3">
            <MenuItem name="1" >
                <Icon type="ios-navigate"></Icon>
                探索
            </MenuItem>
            <MenuItem name="2" >
                <Icon type="ios-navigate"></Icon>
                问答
            </MenuItem>
        </Col>
        <Col span="3">
            <Input  search  placeholder="Enter something..." />
        </Col>
        <Col span="1" offset="3">
            <Badge class="notifications">
                <Icon type="ios-document-outline" size="26"/>
            </Badge>
            <Badge dot class="notifications">
                <Icon type="ios-notifications-outline" size="26"></Icon>
            </Badge>
            
        </Col>

        <Col span="1">
        <Dropdown  class="div-person">
                <a href="javascript:void(0)">
                    {{userName}}
                    <Icon type="ios-arrow-down"></Icon>
                </a>
                <DropdownMenu slot="list">
                    <DropdownItem>设置</DropdownItem>
                    <DropdownItem>退出</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </Col>
        </Menu>
        </Row>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                userName:'wlnsss',
            }
        },
    }
</script>
<style scoped>
    .layout-logo{
        width: 50px;
        height: 30px;
        background: #a09494;
        border-radius: 3px;
        float: right;
        position: relative;
        top: 15px;
        /* right:30px; */
        /* float:right; */
        /* left: 25%; */
    }
    .notifications{
        left:10px;
        top:8px;
    }
    .layout-footer-center{
        text-align: center;
    }
    .div-person{
        margin-left:0px;
        float:right;
    }
    .icon-logo{
        top:8px;
    }
</style>