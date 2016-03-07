module.exports= function($scope, $state, TestService){
		console.log('enter controller_153')
		$scope.test = TestService.getTest()
	}
