module.exports= function($scope, $state, TestService){
		console.log('enter controller_546')
		$scope.test = TestService.getTest()
	}
