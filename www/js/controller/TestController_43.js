module.exports= function($scope, $state, TestService){
		console.log('enter controller_43')
		$scope.test = TestService.getTest()
	}
