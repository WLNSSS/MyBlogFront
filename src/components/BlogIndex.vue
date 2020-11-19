
<template>
    <div>
        <!-- <Row>
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
        </Row> -->
        <blogHeader></blogHeader>
        <Row>
            <Col span="12" offset="6">
            <List item-layout="vertical" border>  
                <ListItem v-for="item in data" :key="item.title">
                    <ListItemMeta :title="item.title" />
                    {{ item.content }}
                    <template slot="action">
                        <li>
                            <Icon type="md-paper-plane" />发布于：{{item.publishTime}}
                        </li>
                        <li>
                            <Icon type="ios-thumbs-up-outline" /> 234
                        </li>
                        <li>
                            <Icon type="ios-chatbubbles-outline" /> 345
                        </li>
                    </template>
                    <template slot="extra">
                        <img :src="item.avatar" style="width: 280px">
                    </template>
                </ListItem>
            </List>
            </Col>
        </Row>
    </div>
</template>

<script>
import blogHeader from "@/components/Header"
    export default {
        components:{blogHeader},
        data(){
            return {
                userName:'wlnsss',
                data: [
                    {
                        title: 'This is title 1',
                        description: 'This is description, this is description, this is description.',
                        avatar: 'https://dev-file.iviewui.com/5wxHCQMUyrauMCGSVEYVxHR5JmvS7DpH/large',
                        content: 'This is the content, this is the content, this is the content, this is the content.',
                        publishTime:'2020-11-13'
                    },
                    {
                        title: 'This is title 2',
                        description: 'This is description, this is description, this is description.',
                        avatar: 'https://dev-file.iviewui.com/5wxHCQMUyrauMCGSVEYVxHR5JmvS7DpH/large',
                        content: 'This is the content, this is the content, this is the content, this is the content.',
                        publishTime:'2020-11-13'
                    },
                    {
                        title: 'This is title 3',
                        description: 'This is description, this is description, this is description.',
                        avatar: 'https://dev-file.iviewui.com/5wxHCQMUyrauMCGSVEYVxHR5JmvS7DpH/large',
                        content: 'This is the content, this is the content, this is the content, this is the content.',
                        publishTime:'2020-11-13'
                    }
                ]
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