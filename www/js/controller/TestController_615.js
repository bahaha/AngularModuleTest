module.exports= function($scope, $state, TestService){
		console.log('enter controller_615')
		$scope.test = TestService.getTest()
	}
