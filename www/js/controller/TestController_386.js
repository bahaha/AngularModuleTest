module.exports= function($scope, $state, TestService){
		console.log('enter controller_386')
		$scope.test = TestService.getTest()
	}
