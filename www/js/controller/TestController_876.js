module.exports= function($scope, $state, TestService){
		console.log('enter controller_876')
		$scope.test = TestService.getTest()
	}
