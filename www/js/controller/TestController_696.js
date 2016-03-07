module.exports= function($scope, $state, TestService){
		console.log('enter controller_696')
		$scope.test = TestService.getTest()
	}
