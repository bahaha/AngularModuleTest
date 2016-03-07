module.exports= function($scope, $state, TestService){
		console.log('enter controller_313')
		$scope.test = TestService.getTest()
	}
