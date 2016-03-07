module.exports= function($scope, $state, TestService){
		console.log('enter controller_970')
		$scope.test = TestService.getTest()
	}
