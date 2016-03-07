module.exports= function($scope, $state, TestService){
		console.log('enter controller_111')
		$scope.test = TestService.getTest()
	}
