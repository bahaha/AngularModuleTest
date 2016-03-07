for f in {1..999}
do
	echo "module.exports= function(\$scope, \$state, TestService){
		console.log('enter controller_$f')
		\$scope.test = TestService.getTest()
	}" > "TestController_$f.js"
done