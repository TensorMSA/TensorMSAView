1. Add .babelrc for mocha test compile babel
run :  mocha --compilers js:babel-register --recursive
2  Errror : warning: LF will be replaced by CRLF 
run : git config core.autocrlf true
3. UNABLE_TO_VERIFY_LEAF_SIGNATURE (npm install)
run : npm config set strict-ssl false
4. install sublime3 on linux 
http://software-engineer.gatsbylee.com/how-to-install-sublime-3-on-centos-7-rhel-7/
5. can not pull on git (Peer's Certificate issuer is not recognized)
run: env GIT_SSL_NO_VERIFY=true git pull
6. Permission Directory on Linux
run: chmod -R 777 "Directory"
7. Add Path on linux
run : PATH=$PATH:/home/ictuser/Projects/node-v6.9.1-linux-x64/bin  / export PATH / echo $PATH
One user
$HOME/.bash_profile
All users except root
/etc/profile
root
/root/.bash_profile
8. set API server (JS,Python)
- process.env.API_SERVER 
- import os, subprocess
os.environ['ATESTVARIABLE'] = 'value'
value = subprocess.check_output('echo $ATESTVARIABLE', shell=True)
assert 'value' in value
9. set env 
- linux : export API_SERVER=http://localhost:8989
- windows : set API_SERVER=http://localhost:8989
- MAC : API_SERVER=http://localhost:8989
10. jenkins (git push and triggered build)
- Jenkins set and github add plugin
11. get super user in linux
- su - then passwd
12. git push cancel
- git push -f origin (last commit id):master / git push -f origin commit_id_value:master
13. kill firefox or node on linux
- killall firefox (node)
14. delete untracked file in git
- git clean -f / git clean -fd (directory)
15. git set global user
$ git config --global user.namenode "John Doe"
$ git config --global user.email johndoe@example.com
16. set anaconda Path
- export PATH=/home/ictuser/anaconda3/bin:$PATH
17. run jupyter
- jupyter notebook
18. React global variable.
    HomeComponent.childContextTypes = {
    NN_ID: React.PropTypes.string
    };
    getChildContext() {
        return {NN_ID: "nn0000047"};
    }

StepArrowComponent.contextTypes = {
    NN_ID: React.PropTypes.string
};//this.context.NN_ID
18.Git sync master
- git fetch origin
- git reset --hard origin/master

19. Use Spinner

export default class AirFlowRateReportComponent extends React.Component {
    renderTest() {
        if (this.props.data != null) {
            return (<div>test</div>);
        } else {
            return (<SpinnerComponent/>);
        }
    }
    render() {
        return(<div>
            {this.renderTest()}
        </div>)
    }
}
in the render function ->
    if (!this.props.WdnnTableData) {return <SpinnerComponent />;}
